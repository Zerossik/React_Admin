import { useCollapsible } from "@/hooks/useCollapsible";
import { Button } from "../ui/Button";

import css from "./menu.module.scss";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { useState } from "react";
import type { Mode } from "../Collapsible/types";

export const MenuContent = () => {
  const { close, mode } = useCollapsible();
  const [className, setClassName] = useState<Mode>(mode);

  if (mode !== className) {
    requestAnimationFrame(() => setClassName(mode));
  }

  return (
    <div className={clsx(css.menu__inner, className)}>
      <Button className={css.menu__close} onClick={() => close()}>
        <IoMdClose />
      </Button>
    </div>
  );
};
