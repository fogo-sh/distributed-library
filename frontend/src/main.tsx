import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as rootLoader, RootPage } from "./routes/root";

import { ErrorHandler } from "./error-handler";
import { IndexPage } from "./routes";
import { BooksPage } from "./routes/books";
import { UsersPage } from "./routes/users";
import { ActionsPage } from "./routes/actions";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <RootPage />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "actions",
        element: <ActionsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
