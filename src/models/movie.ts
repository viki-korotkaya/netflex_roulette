export interface Movie {
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: any[];
  id: number;
}

export interface MovieFormProps {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: Option[];
  runtime: number;
  overview: string;
}

export interface Option {
  value: string;
}

export enum Mode {
  Add = "add",
  Edit = "edit",
  Delete = "delete",
  Default = "",
}
