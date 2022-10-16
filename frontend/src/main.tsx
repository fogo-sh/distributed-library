import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as rootLoader, RootPage } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <RootPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
