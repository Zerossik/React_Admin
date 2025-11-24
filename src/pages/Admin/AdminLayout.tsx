import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <>
      <header>Admin Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Admin Footer</footer>
    </>
  );
};
