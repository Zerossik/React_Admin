import { type HTMLAttributes } from "react";

const NavItem = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={className && className} {...props}>
      {children}
    </li>
  );
};

export default NavItem;
