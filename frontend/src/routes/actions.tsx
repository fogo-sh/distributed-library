import { Action } from "../components/Action";
import { useData } from "./root";

export const ActionsPage = () => {
  const {
    log: { actions },
  } = useData();

  return (
    <>
      {actions?.map((action) => (
        <Action action={action} />
      ))}
    </>
  );
};
