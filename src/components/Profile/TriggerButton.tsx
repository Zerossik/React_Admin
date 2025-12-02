import { IoMdArrowDropdown } from "react-icons/io";
import { useCollapsible } from "@/hooks/useCollapsible";
import css from "./profile.module.scss";
import clsx from "clsx";

const TriggerButton = () => {
  const { mode } = useCollapsible();

  return (
    <IoMdArrowDropdown
      className={clsx(
        css.triggerButton__icon,
        mode === "visible" && css.triggerButton__icon_rotate
      )}
    />
  );
};

export default TriggerButton;
