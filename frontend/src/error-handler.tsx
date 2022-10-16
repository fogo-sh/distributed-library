import { useRouteError } from "react-router-dom";

const errorToText = (error: any) => {
  const text = error.statusText || error.message;
  return text;
};

// TODO any usage, probably fine
export const ErrorHandler = () => {
  const error = useRouteError() as any; // TODO any usage, probably fine

  return (
    <div className="px-6 py-2 font-semibold">
      <h1 className="text-2xl text-red-700">Oops!</h1>
      <p className="text-lg text-red-700">
        Sorry, an unexpected error has occurred.
      </p>
      <div className="my-3 p-3 bg-black text-white overflow-scroll">
        <pre>
          <p>{errorToText(error)}</p>
        </pre>
      </div>
      <span>
        Try{" "}
        <button
          onClick={() => window.location.reload()}
          className="underline text-blue-700"
        >
          refreshing the page
        </button>
      </span>
    </div>
  );
};
