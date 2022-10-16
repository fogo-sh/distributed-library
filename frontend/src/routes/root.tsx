import { createContext, useContext } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import type { paths } from "../api-types";

type LoaderData = {
  state: paths["/state"]["get"]["responses"]["200"]["content"]["application/json"];
  log: paths["/log"]["get"]["responses"]["200"]["content"]["application/json"];
};

export async function loader() {
  const state = await (await fetch("/api/state")).json();
  const log = await (await fetch("/api/log")).json();
  return {
    state,
    log,
  } as LoaderData;
}

export const DataContext = createContext<LoaderData | null>(null);
export const useData = () => useContext(DataContext)!;

export const RootPage = () => {
  const data = useLoaderData() as LoaderData;
  return (
    <div className="flex flex-col gap-y-3">
      <div role="banner">
        <Link to="/">
          <h1 className="text-2xl font-medium">Fogo.sh Distributed Library</h1>
        </Link>
      </div>

      <nav className="flex gap-x-4 underline">
        <Link to="/books">Books</Link>
        <Link to="/users">Users</Link>
        <Link to="/actions">Actions</Link>
      </nav>

      <hr />

      <DataContext.Provider value={data}>
        <Outlet />
      </DataContext.Provider>
    </div>
  );
};
