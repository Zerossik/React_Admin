import { useCollapsible } from "@/hooks/useCollapsible";
import { Button } from "../ui/Button";
import { MdOutlineDoubleArrow } from "react-icons/md";
import clsx from "clsx";

import css from "./style.module.scss";

export const Trigger = () => {
  const { mode, toggle } = useCollapsible();

  if (mode === "visible") localStorage.setItem("sidebarMode", mode);
  else localStorage.setItem("sidebarMode", "hidden");

  return (
    <Button className={css.trigger} onClick={toggle}>
      <MdOutlineDoubleArrow
        className={clsx(
          css.trigger__triggerIcon,
          mode === "visible" && css.trigger__icon_rotated
        )}
      />
    </Button>
  );
};
