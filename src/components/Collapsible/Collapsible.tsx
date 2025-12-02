import { useRef, useState, type ReactElement } from "react";
import { CollapsibleContext } from "./context";
import { Trigger } from "./Trigger";
import Content from "./Content";

import type { Mode } from "./types";

type PropsType = {
  hiddenDelay?: number;
  className?: string;
  children: ReactElement | ReactElement[];
  defaultMode?: Mode;
};

const Collapsible = ({
  hiddenDelay,
  children,
  className,
  defaultMode = "hidden",
}: PropsType) => {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const ref = useRef<number | null>(null);

  const clearTimer = () => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const open = () => {
    clearTimer();
    setMode("visible");
  };

  const close = () => {
    if (hiddenDelay === undefined) return setMode("hidden");

    if (ref.current) return;
    setMode("closing");
    ref.current = setTimeout(() => {
      setMode("hidden");
      clearTimer();
    }, hiddenDelay);
  };

  const toggle = () => {
    if (mode !== "visible") {
      open();
    } else {
      close();
    }
  };

  return (
    <CollapsibleContext value={{ mode: mode, open, close, toggle }}>
      <div className={className}>{children}</div>
    </CollapsibleContext>
  );
};

Collapsible.Trigger = Trigger;
Collapsible.Content = Content;

export default Collapsible;
