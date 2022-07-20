import { useContext } from "react";
import { AppContext } from "../Context";

export function useAppContext() {
  return useContext(AppContext);
}
