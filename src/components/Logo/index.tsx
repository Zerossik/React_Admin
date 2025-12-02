import css from "./logo.module.scss";
import { Link } from "react-router";

export const Logo = ({ value }: { value: string }) => {
  return (
    <Link to="/admin" className={css.logo}>
      {value}
    </Link>
  );
};
