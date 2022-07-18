import { MovieFormProps, Movie, Option } from "../../models/movie";

export const nav = ["all", "documentary", "comedy", "horror", "crime"];

export const sortBy = ["release date", "name"];

export let movieList: Movie[] = [
  {
    id: "1",
    title: "Pulp Fiction",
    url: "pulp-fiction",
    releaseDate: "2004-10-14",
    overview: "Action & Adventure",
    rating: 8.9,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 168,
  },
  {
    id: "2",
    title: "Bohemian Rhapsody",
    url: "bohemian-rhapsody",
    releaseDate: "2003-10-01",
    overview: "Drama, Biography, Music",
    rating: 7.9,
    genre: [{ value: "documentary", label: "Documentary" }],
    runtime: 134,
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    url: "kill-bill",
    releaseDate: "2004-04-16",
    overview: "Oscar winning Models",
    rating: 8,
    genre: [
      { value: "crime", label: "Crime" },
      { value: "comedy", label: "Comedy" },
    ],
    runtime: 135,
  },
  {
    id: "4",
    title: "Avengers: war of Infinity",
    url: "avengers",
    releaseDate: "2018-09-24",
    overview: "Action & Adventure",
    rating: 8.4,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 159,
  },
  {
    id: "5",
    title: "Inception",
    url: "inception",
    releaseDate: "2010-07-13",
    overview: "Action & Adventure",
    rating: 8.8,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 158,
  },
  {
    id: "6",
    title: "Reservoir dogs",
    url: "reservoir-dogs",
    releaseDate: "1992-10-08",
    overview: "Oscar winning Models",
    rating: 8.3,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 99,
  },
];

export const formInitial: MovieFormProps = {
  title: "",
  releaseDate: "",
  url: "",
  rating: 0,
  genre: [],
  runtime: 0,
  overview: "",
};

export const genreOptions: Option[] = [
  { value: "documentary", label: "Documentary" },
  { value: "comedy", label: "Comedy" },
  { value: "horror", label: "Horror" },
  { value: "crime", label: "Crime" },
];
