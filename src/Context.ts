import { createContext } from "react";
import { Movie, Mode } from "./models/movie";

export interface AppContestInterface {
  openModalHandler: (mode: Mode, movie?: Movie) => void;
}

export const AppContext = createContext({} as AppContestInterface);
