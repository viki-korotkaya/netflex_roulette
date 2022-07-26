import { MovieFormProps, Movie, Option } from "../../models/movie";

export const nav = ["all", "documentary", "comedy", "horror", "crime"];

export const sortBy = ["release date", "name"];

export const formInitial: MovieFormProps = {
  title: "",
  release_date: "",
  poster_path: "",
  vote_average: 0,
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
