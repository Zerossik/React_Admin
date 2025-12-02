import css from "./adminHeader.module.scss";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { Profile } from "@/components/Profile";
import { Search } from "@/components/Search";
import { Menu } from "@/components";

export const AdminHeader = () => {
  return (
    <header className={css.adminHeader}>
      <Container>
        <Logo value="Logo" />

        <Search className="hidden-mobile" />
        <Profile className="hidden-mobile hidden-tablet" />

        <Menu className="hidden-desktop" />
      </Container>
    </header>
  );
};
