import { Book } from "../components/Book";
import { useData } from "./root";

export const BooksPage = () => {
  const {
    state: { books },
  } = useData();

  return (
    <>
      {books?.map((book) => (
        <Book name={book.id} isbn={book.isbn} cover_image={book.cover_image} />
      ))}
    </>
  );
};
