import { createContext, useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
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
      <div>
        <h1 className="text-2xl font-medium">Fogo.sh Distributed Library</h1>
      </div>

      <DataContext.Provider value={data}>
        <Outlet />
      </DataContext.Provider>
    </div>
  );
};
