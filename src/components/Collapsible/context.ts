import { createContext } from "react";

interface ContextType {
  mode: "visible" | "hidden";
  open: () => void;
  close: () => void;
  toggle: () => void;
}
export const CollapsibleContext = createContext<ContextType | null>(null);
