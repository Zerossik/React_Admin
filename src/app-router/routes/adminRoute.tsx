export const adminRoute = {
  path: "/admin",
  lazy: async () => {
    const { AdminLayout } = await import("@/pages/Admin/AdminLayout");
    return { Component: AdminLayout };
  },
  children: [
    {
      index: true,
      lazy: async () => {
        const { Dashboard } = await import("@/pages/Admin/Dashboard");
        return { Component: Dashboard };
      },
    },
    {
      path: ":slug/:id?",
      lazy: async () => {
        const { SlugPage } = await import("@/pages/Admin/SlugPage");
        return { Component: SlugPage };
      },
    },
  ],
};
