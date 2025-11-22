import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "@/styles/index.scss";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    children: [
      {
        index: true,
        element: <div>Dasboard</div>,
      },
      { path: "login", element: <div>Login</div> },
      { path: "register", element: <div>Register</div> },
      { path: ":slug/:id?", element: <div>Page with slug</div> },
    ],
  },

  { path: "*", element: <div>404 Not found</div> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
