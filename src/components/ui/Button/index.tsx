import type { HTMLAttributes, ReactNode } from "react";

interface PropsType extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: PropsType) => {
  return <button {...props}>{children}</button>;
};
