import { IoMdArrowDropdown } from "react-icons/io";
import { useCollapsible } from "@/hooks/useCollapsible";
import css from "./profile.module.scss";
import clsx from "clsx";
import { Button } from "../ui/Button";

const TriggerButton = () => {
  const { mode, toggle } = useCollapsible();

  return (
    <Button onClick={toggle} className={css.triggerButton}>
      <IoMdArrowDropdown
        className={clsx(
          css.triggerButton__icon,
          mode === "visible" && css.triggerButton__icon_rotate
        )}
      />
    </Button>
  );
};

export default TriggerButton;
