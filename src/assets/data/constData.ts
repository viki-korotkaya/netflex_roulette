import { MovieFormProps, Option } from "models/movie";

export const nav = ["all", "documentary", "comedy", "horror", "crime"];

export const formInitial: MovieFormProps = {
  title: "",
  releaseDate: "",
  movieUrl: "",
  rating: 0,
  genres: [],
  runtime: 0,
  overview: "",
};

export const genreOptions: Option[] = [
  { value: "Documentary"},
  { value: "Comedy" },
  { value: "Horror" },
  { value: "Crime" },
];
