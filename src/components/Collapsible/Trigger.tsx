import type { ReactNode } from "react";

import { useCollapsible } from "@/hooks/useCollapsible";

type PropsType = {
  children: ReactNode;
  className?: string;
};

export const Trigger = ({ className, children }: PropsType) => {
  const { toggle } = useCollapsible();

  return (
    <button className={className} onClick={() => toggle()}>
      {children}
    </button>
  );
};
