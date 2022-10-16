from pathlib import Path
from typing import List

import toml

from library.models import (
    Book,
    Log,
    AddBook,
    AddUser,
    LendBook,
    State,
    StateBook,
    StateUser,
    User,
)


def parse_log(log_path: Path) -> Log:
    return Log(**toml.loads(log_path.read_text()))


def find_user(users: List[StateUser], name: str):
    return next(u for u in users if u.name == name)


def find_book(books: List[StateBook], id: str):
    return next(b for b in books if b.id == id)


def state_from_log(log: Log) -> State:
    state = State()

    for action in [a.__root__ for a in log.actions]:
        if isinstance(action, AddUser):
            state.users.append(StateUser(**action.dict()))
        elif isinstance(action, AddBook):
            state_owner = find_user(state.users, action.user)
            state_owner.owned_books.append(action.book)
            state_owner.held_books.append(action.book)
            owner = User(**state_owner.dict())
            book = StateBook(**action.book.dict(), owned_by=owner, held_by=owner)
            state.books.append(book)
        elif isinstance(action, LendBook):
            from_user = find_user(state.users, action.from_user)
            to_user = find_user(state.users, action.to_user)
            state_book = find_book(state.books, action.book_id)
            state_book.held_by = User(**to_user.dict())
            book = Book(**state_book.dict())
            from_user.held_books.remove(book)
            to_user.held_books.append(book)

    return state
