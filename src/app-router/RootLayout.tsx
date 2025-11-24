import { Outlet, useNavigation } from "react-router";

export const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";
  return (
    <>
      {isLoading && <div>ROOT LOADING...</div>}

      <Outlet />
    </>
  );
};
