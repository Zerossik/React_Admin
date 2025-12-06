import Collapsible from "@/components/Collapsible";
import { Trigger } from "./Trigger";
import { SideBarContent } from "./SideBarContent";

import css from "./style.module.scss";
import type { Mode } from "../Collapsible/types";

const SideBar = () => {
  const raw = localStorage.getItem("sidebarMode");

  const defaultMode: Exclude<Mode, "closing"> | null =
    raw === "visible" || raw === "hidden" ? raw : null;

  return (
    <Collapsible
      className={css.sidebar}
      hiddenDelay={100}
      defaultMode={defaultMode || "visible"}
    >
      <Collapsible.Trigger>
        <Trigger />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <SideBarContent />
      </Collapsible.Content>
    </Collapsible>
  );
};

export default SideBar;
