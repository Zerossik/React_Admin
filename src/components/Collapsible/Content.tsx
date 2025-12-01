import { Activity, type ReactNode } from "react";

import { useCollapsible } from "@/hooks/useCollapsible";

type PropsType = {
  children: ReactNode;
  className?: string;
};

const Content = ({ className, children }: PropsType) => {
  const { mode } = useCollapsible("Content");

  return (
    <Activity mode={mode}>
      <div className={className}>{children}</div>
    </Activity>
  );
};

export default Content;
