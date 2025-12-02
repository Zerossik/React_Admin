import { Activity, type ReactElement } from "react";
import { useCollapsible } from "@/hooks/useCollapsible";

type PropsType = {
  children: ReactElement<HTMLElement> | ReactElement<HTMLElement>[];
};

const Content = ({ children }: PropsType) => {
  const { mode } = useCollapsible();

  const modeWithoutClosing = mode !== "hidden" ? "visible" : "hidden";
  return <Activity mode={modeWithoutClosing}>{children}</Activity>;
};

export default Content;
