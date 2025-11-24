import { Link, Outlet } from "react-router";

export const HomePageLayout = () => {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Outlet />
        <Link to="/admin"> TO ADMIN</Link>
      </main>
      <footer>THIS IS Footer</footer>
    </>
  );
};
