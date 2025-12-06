import type { HTMLAttributes, ReactNode } from "react";
import "./container.scss";
import clsx from "clsx";
interface ContainerI extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Container = ({ children, className, ...props }: ContainerI) => {
  return (
    <div className={clsx("container", className)} {...props}>
      {children}
    </div>
  );
};
