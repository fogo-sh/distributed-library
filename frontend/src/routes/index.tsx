import { Action } from "../components/Action";
import { useData } from "./root";

export const IndexPage = () => {
  const {
    log: { actions },
  } = useData();

  return (
    <>
      <h2>Recent Actions</h2>
      {[...(actions || [])]
        .reverse()
        .slice(0, 5)
        .map((action) => (
          <Action action={action} />
        ))}
    </>
  );
};
