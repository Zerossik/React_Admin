import { clsx } from "clsx";
import type { ReactNode } from "react";

import css from "./style.module.scss";
import { useCollapsible } from "@/hooks/useCollapsible";

type PropsType = {
  children: ReactNode;
  className?: string;
};

export const Trigger = ({ className, children }: PropsType) => {
  const { toggle } = useCollapsible("Trigger");

  return (
    <div className={clsx(css.trigger, className)} onClick={() => toggle()}>
      {children}
    </div>
  );
};
