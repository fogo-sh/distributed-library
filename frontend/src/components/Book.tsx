export const Book = ({
  name,
  isbn,
  cover_image,
}: {
  name: string;
  isbn: number;
  cover_image?: string;
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <img src={cover_image} className="h-12 border" />
      <p>
        {name}{" "}
        <a href={`https://isbnsearch.org/isbn/${isbn}`}>
          <span className="opacity-60 text-xs"> (ISBN: {isbn})</span>
        </a>
      </p>
    </div>
  );
};
