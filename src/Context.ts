import {createContext} from "react";
import {Movie} from "./models/movie";

export interface AppContestInterface {
  selectedMovie: Movie | null,
  setSelectedMovie: (movie: Movie | null) => void;
}

export const AppContext = createContext({} as AppContestInterface);
