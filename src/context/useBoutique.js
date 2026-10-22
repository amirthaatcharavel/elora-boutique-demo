import { useContext } from "react";
import { BoutiqueContext } from "./BoutiqueContextInstance";

export function useBoutique() {
  const context = useContext(BoutiqueContext);
  if (!context) {
    throw new Error("useBoutique must be used within a BoutiqueProvider");
  }
  return context;
}
