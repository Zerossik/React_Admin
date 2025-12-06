import Collapsible from "../Collapsible";
import { MenuContent } from "./MenuContent";
import MenuTrigger from "./MenuTrigger";

type propsType = {
  className?: string;
};

export const Menu = ({ className }: propsType) => {
  return (
    <Collapsible hiddenDelay={200} className={className}>
      <Collapsible.Trigger>
        <MenuTrigger />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <MenuContent />
      </Collapsible.Content>
    </Collapsible>
  );
};
