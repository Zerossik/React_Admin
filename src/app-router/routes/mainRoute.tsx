export const mainRoute = {
  path: "/",
  lazy: async () => {
    const { HomePageLayout } = await import("@/pages/Home/HomePageLayout");
    return { Component: HomePageLayout };
  },
  children: [
    {
      index: true,
      lazy: async () => {
        const { MainPage } = await import("@/pages/Home/MainPage");
        return { Component: MainPage };
      },
    },
  ],
};
