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

export interface MovieFormProps {
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
  Add = "add",
  Edit = "edit",
  Delete = "delete",
  Default = "",
}
