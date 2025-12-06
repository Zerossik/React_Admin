import { useCollapsible } from "@/hooks/useCollapsible";
import { useEffect, useLayoutEffect, useRef } from "react";

import css from "./style.module.scss";

export const SideBarContent = () => {
  const { mode } = useCollapsible();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const rawMode = localStorage.getItem("sidebarMode");
    if (rawMode === "visible") element?.classList.add(css.visible);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (mode === "visible") element?.classList.add(css.visible);
    else element?.classList.remove(css.visible);
  }, [mode]);

  return (
    <div className={css.content} ref={ref}>
      <div className={css.content__inner}>ТУТ КАКОЙ ТО КОНТЕНТ</div>
    </div>
  );
};
