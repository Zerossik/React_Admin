import { use } from "react";
import { CollapsibleContext } from "@/components/Collapsible/context";

export const useCollapsible = () => {
  const context = use(CollapsibleContext);

  if (!context)
    throw new Error(
      `Element can only be used inside the Collapsible component.`
    );

  return context;
};
