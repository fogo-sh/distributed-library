import type { components } from "../api-types";
import { Book } from "./Book";
import { User } from "./User";

type Action = components["schemas"]["Action"];

const actionToElement = (action: Action): JSX.Element | null => {
  switch (action.action_type) {
    case "AddUser":
      return (
        <>
          <p>Add User:</p>
          <User {...action} />
        </>
      );
    case "AddBook":
      return (
        <>
          <p>Add Book:</p>
          <Book
            name={action.book.id}
            isbn={action.book.isbn}
            cover_image={action.book.cover_image}
          />
        </>
      );
    default:
      return null;
  }
};

export const Action = ({ action }: { action: Action }) => {
  return <div className="flex flex-col gap-x-2">{actionToElement(action)}</div>;
};
