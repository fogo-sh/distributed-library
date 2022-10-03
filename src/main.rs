use std::collections::HashMap;
use std::error::Error;
use std::fs;

use serde_derive::Deserialize;

#[derive(Deserialize, Debug)]
struct Actor {
    name: String,
    github_username: Option<String>,
    books: Vec<Book>,
}

#[derive(Deserialize, Debug)]
struct Book {
    id: String,
    isbn: u64,
    url: Option<String>,
    cover_image_url: Option<String>,
}

#[derive(Deserialize, Debug)]
#[serde(tag = "type")]
enum Action {
    AddActor {
        actor: String,
        github_username: Option<String>,
    },
    AddBook {
        actor: String,
        book: Book,
    },
    LendBook {
        from_actor: String,
        to_actor: String,
        book_id: String,
    },
}

#[derive(Deserialize, Debug)]
struct Log {
    actions: Vec<Action>,
}

fn main() -> Result<(), Box<dyn Error>> {
    let log_str: String = fs::read_to_string("log.toml")?.parse()?;
    let log: Log = toml::from_str(&log_str)?;

    let mut actors: Vec<Actor> = Vec::new();
    let mut name_to_actor: HashMap<String, &Actor> = HashMap::new();

    for action in log.actions {
        println!("{:?}", actors);
        match action {
            Action::AddActor {
                actor,
                github_username,
            } => {
                println!("AddActor: {}", actor);
                let actor = Actor {
                    name: actor,
                    github_username: github_username,
                    books: Vec::new(),
                };
                actors.push(actor);
                name_to_actor.insert(actor.name, &actor);
            }
            Action::AddBook { actor, book } => {
                println!("AddBook: {} -> {}", actor, book.id);
                let actor = name_to_actor.get(&actor).unwrap();
                actor.books.push(book);
            }
            Action::LendBook {
                from_actor,
                to_actor,
                book_id,
            } => {
                println!("LendBook: {} {} -> {}", book_id, from_actor, to_actor);
                let book = {
                    let mut from_actor = name_to_actor.get_mut(&from_actor).unwrap();
                    let mut from_books_iter = from_actor.books.iter_mut();
                    let book_pos = from_books_iter.position(|b| b.id == book_id).unwrap();
                    from_actor.books.remove(book_pos)
                };

                let mut to_actor = name_to_actor.get_mut(&to_actor).unwrap();

                to_actor.books.push(book);
            }
        }
    }

    println!("{:?}", actors);

    Ok(())
}
