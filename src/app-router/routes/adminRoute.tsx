import { lazyRoute } from "@/lib/lazyRoute";

export const adminRoute = {
  path: "/admin",
  lazy: lazyRoute(() => import("@/pages/Admin/AdminLayout"), "AdminLayout"),
  children: [
    {
      index: true,
      lazy: lazyRoute(
        () => import("@/pages/Admin/Dashboard/Dashboard"),
        "Dashboard"
      ),
    },
    {
      path: ":slug",
      lazy: lazyRoute(() => import("@/pages/Admin/SlugPage"), "SlugPage"),
    },
  ],
};
