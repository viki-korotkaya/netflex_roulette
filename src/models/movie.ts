export interface Movie {
  title: string;
  tagline: string;
  rating: number;
  releaseDate: string;
  movieUrl: string;
  overview: string;
  runtime: number;
  genres: any[];
  id: number;
}

export interface MovieServerFormat {
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number;
  budget: number;
  revenue: number;
  genres: string[];
  id: number;
}

export interface MovieFormProps {
  title: string;
  releaseDate: string;
  movieUrl: string;
  rating: number;
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

export enum StatusType {
  Idle = "idle",
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

export interface SearchQuery {
  filter?: string;
  sortBy?: string;
  search?: string;
}
