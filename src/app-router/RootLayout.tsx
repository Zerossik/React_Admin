import { Loader } from "@/components/Loader";
import { Outlet, useNavigation } from "react-router";

export const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";
  return (
    <>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};
