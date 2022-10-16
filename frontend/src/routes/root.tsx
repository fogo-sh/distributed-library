import { useLoaderData } from "react-router-dom";
import type { paths } from "../api-types";

type LoaderData =
  paths["/state"]["get"]["responses"]["200"]["content"]["application/json"];

export async function loader() {
  const resp = await fetch("/api/state");
  const json = await resp.json();
  return json;
}

export const RootPage = () => {
  const data = useLoaderData() as LoaderData;
  return (
    <div className="flex flex-col gap-y-3">
      <div>
        <h1 className="text-lg font-medium">Fogo.sh Distributed Library</h1>
        <p className="italic">wip</p>
      </div>

      <div className="bg-black text-white text-sm p-4 overflow-auto">
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </div>
    </div>
  );
};
