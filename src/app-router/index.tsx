import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { adminRoute, mainRoute } from "./routes";
import { lazyRoute } from "@/lib/lazyRoute";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    hydrateFallbackElement: <div>START ROOT LOADING...</div>,
    children: [
      mainRoute,
      adminRoute,
      {
        path: "admin/login",
        lazy: lazyRoute(() => import("@/pages/Admin/LoginPage"), "LoginPage"),
      },
    ],
  },
]);
