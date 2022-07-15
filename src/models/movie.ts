export interface Movie {
  id: string;
  title: string;
  url: string;
  releaseDate: string;
  overview: string;
  rating: number;
  genre: { value: string; label: string }[] | [];
  runtime: number;
}

export interface formInitialForMovie {
  title: string;
  releaseDate: string;
  url: string;
  rating: number;
  genre: { value: string; label: string }[] | [];
  runtime: number;
  overview: string;
}

export interface Option {
  value: string;
  label: string;
}

export enum Mode {
  ADD = "add",
  EDIT = "edit",
  DELETE = "delete",
  DEFAULT = "",
}
