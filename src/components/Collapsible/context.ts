import { createContext } from "react";
import type { Mode } from "./types";

interface ContextType {
  mode: Mode;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
export const CollapsibleContext = createContext<ContextType | null>(null);
