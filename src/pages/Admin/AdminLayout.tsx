import { AdminHeader } from "@/components/AdminHeader";
import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <>
      <title>admin</title>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <footer>Admin Footer</footer>
    </>
  );
};
