import { useData } from "./root";

export const IndexPage = () => {
  const {
    state: { books, users },
  } = useData();

  return (
    <>
      <p>TODO show recent actions</p>
    </>
  );
};
