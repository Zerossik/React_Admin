import { type ReactElement } from "react";

import NavItem from "./NavItem";

type PropsType = {
  children: ReactElement | ReactElement[];
  className?: string;
};
const Navigation = ({ children, className }: PropsType) => {
  return <ul className={className && className}>{children}</ul>;
};

Navigation.Item = NavItem;

export default Navigation;
