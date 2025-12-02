import css from "./menu.module.scss";
import { IoMenu } from "react-icons/io5";

import Collapsible from "../Collapsible";
import { MenuContent } from "./MenuContent";

type propsType = {
  className?: string;
};

export const Menu = ({ className }: propsType) => {
  return (
    <Collapsible hiddenDelay={200} className={className}>
      <Collapsible.Trigger className={css.menu__open}>
        <IoMenu />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <MenuContent />
      </Collapsible.Content>
    </Collapsible>
  );
};
