import { use } from "react";
import { CollapsibleContext } from "@/components/Collapsible/context";

export const useCollapsible = (componentName: string) => {
  const context = use(CollapsibleContext);

  if (!context)
    throw new Error(
      `"${componentName}" can only be used inside the Collapsible component.`
    );

  return context;
};
