import type { HTMLAttributes, ReactNode } from "react";
import "./container.scss";
interface ContainerI extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Container = ({ children, ...props }: ContainerI) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
};
