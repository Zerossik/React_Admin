import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { adminRoute, mainRoute } from "./routes";
import { lazyRoute } from "@/lib/lazyRoute";
import { Loader } from "@/components/Loader";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    hydrateFallbackElement: <Loader />,
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
