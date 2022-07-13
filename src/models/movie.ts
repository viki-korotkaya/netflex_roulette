export interface Movie {
  id: string;
  name: string;
  urlName: string;
  releaseDate: string;
  description: string;
  rating: number;
  genre: { value: string, label: string }[];
  runtime: number;
}

export interface State {
  name: string;
  releaseDate: string;
  urlName: string;
  rating: string;
  genre: [];
  runtime: string;
  description: string;
}



export interface Option {
  value: string, label: string
}

export type MovieType = {
  id: string;
  name: string;
  urlName: string;
  releaseDate: string;
  description: string;
  rating: number;
  genre: { value: string, label: string }[] | [];
  runtime: number;
}


