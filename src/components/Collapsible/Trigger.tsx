import type { ReactElement } from "react";

type PropsType = {
  children: ReactElement;
};

export const Trigger = ({ children }: PropsType) => {
  return <>{children}</>;
};
