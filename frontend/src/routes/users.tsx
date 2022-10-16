import { User } from "../components/User";
import { useData } from "./root";

export const UsersPage = () => {
  const {
    state: { users },
  } = useData();

  return (
    <>
      {users?.map((user) => (
        <User name={user.name} github_username={user.github_username} />
      ))}
    </>
  );
};
