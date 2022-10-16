from typing import Annotated, List, Literal, Union

from pydantic import BaseModel, Field


class User(BaseModel):
    name: str
    github_username: str | None


class Book(BaseModel):
    id: str
    isbn: int
    url: str | None
    cover_image: str | None


class BaseAction(BaseModel):
    pass


class AddUser(BaseAction, User):
    action_type: Literal["AddUser"]


class AddBook(BaseAction):
    action_type: Literal["AddBook"]
    user: str
    book: Book


class LendBook(BaseAction):
    action_type: Literal["LendBook"]
    from_user: str
    to_user: str
    book_id: str


class Action(BaseModel):
    __root__: Annotated[
        Union[AddUser, AddBook, LendBook], Field(discriminator="action_type")
    ]


class Log(BaseModel):
    actions: List[Action] = []


class StateUser(User):
    owned_books: List[Book] = []
    held_books: List[Book] = []


class StateBook(Book):
    owned_by: User
    held_by: User


class State(BaseModel):
    users: List[StateUser] = []
    books: List[StateBook] = []
