import { Book } from "../components/Book";
import { User } from "../components/User";
import { useData } from "./root";

export const IndexPage = () => {
  const {
    state: { books, users },
  } = useData();

  return (
    <>
      <h1 className="text-lg font-medium">Books</h1>
      {books?.map((book) => (
        <Book name={book.id} isbn={book.isbn} cover_image={book.cover_image} />
      ))}
      <h1 className="text-lg font-medium">Users</h1>
      {users?.map((user) => (
        <User name={user.name} github_username={user.github_username} />
      ))}
    </>
  );
};
