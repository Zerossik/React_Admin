import { lazyRoute } from "@/lib/lazyRoute";

export const mainRoute = {
  path: "/",
  lazy: lazyRoute(
    () => import("@/pages/Home/HomePageLayout"),
    "HomePageLayout"
  ),
  children: [
    {
      index: true,
      lazy: lazyRoute(() => import("@/pages/Home/MainPage"), "MainPage"),
    },
  ],
};
