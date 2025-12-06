import { AdminHeader } from "@/components/AdminHeader";
import SideBar from "@/components/SideBar";
import { Container } from "@/components/ui/Container";
import { Outlet } from "react-router";

import css from "./style.module.scss";

export const AdminLayout = () => {
  return (
    <>
      <title>admin</title>
      <AdminHeader />
      <main>
        <div className={css.content}>
          <Container className={css.container}>
            <SideBar />
            <div>
              <Outlet />
            </div>
          </Container>
        </div>
      </main>
      <footer>Admin Footer</footer>
    </>
  );
};
