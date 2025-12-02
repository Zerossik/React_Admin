import { Activity, useState, type ReactElement } from "react";

type PropsType = {
  mode: "visible" | "hidden";
  delay?: number;
  children: ReactElement<HTMLElement> | ReactElement<HTMLElement>[];
};
export const AnimatedActivity = ({ children, mode, delay }: PropsType) => {
  const [newMode, setNewMode] = useState<"visible" | "hidden">(mode);

  if (mode === "visible" && mode !== newMode) setNewMode("visible");

  if (mode === "hidden" && mode !== newMode)
    setTimeout(() => setNewMode("hidden"), delay || 0);

  console.log("render");
  return (
    <>
      <Activity mode={newMode}>{children}</Activity>
    </>
  );
};
