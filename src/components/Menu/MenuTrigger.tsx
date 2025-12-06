import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/Button";

import css from "./menu.module.scss";
import { useCollapsible } from "@/hooks/useCollapsible";

const MenuTrigger = () => {
  const { open } = useCollapsible();
  return (
    <Button className={css.menu__open} onClick={open}>
      <IoMenu />
    </Button>
  );
};

export default MenuTrigger;
