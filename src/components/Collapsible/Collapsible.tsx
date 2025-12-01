import { useState, type HTMLAttributes } from "react";
import { CollapsibleContext } from "./context";
import clsx from "clsx";

import css from "./style.module.scss";

import { Trigger } from "./Trigger";
import Content from "./Content";

const Collapsible = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const [mode, setMode] = useState<boolean>(false);

  const open = () => setMode(true);
  const close = () => setMode(false);
  const toggle = () => setMode(!mode);

  const modeValue = mode ? "visible" : "hidden";

  return (
    <CollapsibleContext value={{ mode: modeValue, open, close, toggle }}>
      <div className={clsx(css.collapsible, className)} {...props}>
        {children}
      </div>
    </CollapsibleContext>
  );
};

Collapsible.Trigger = Trigger;
Collapsible.Content = Content;

export default Collapsible;
