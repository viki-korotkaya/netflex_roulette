import {Movie, State, Option} from "../../models/movie";

export const nav = ["all", "documentary", "comedy", "horror", "crime"];

export const sortBy = ["release date", "name"];

export let movieList: Movie[] = [
  {
    id: "1",
    name: "Pulp Fiction",
    urlName: "pulp-fiction",
    releaseDate: '2004-10-14',
    description: "Action $ Adventure",
    rating: 8.9,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 168
  },
  {
    id: "2",
    name: "Bohemian Rhapsody",
    urlName: "bohemian-rhapsody",
    releaseDate: '2003-10-01',
    description: "Drama, Biography, Music",
    rating: 7.9,
    genre: [{ value: "documentary", label: "Documentary" }],
    runtime: 134
  },
  {
    id: "3",
    name: "Kill Bill: Vol 2",
    urlName: "kill-bill",
    releaseDate: '2004-04-16',
    description: "Oscar winning Models",
    rating: 8,
    genre: [{ value: "crime", label: "Crime" }, { value: "comedy", label: "Comedy" }],
    runtime: 135
  },
  {
    id: "4",
    name: "Avengers: war of Infinity",
    urlName: "avengers",
    releaseDate: '2018-09-24',
    description: "Action & Adventure",
    rating: 8.4,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 159
  },
  {
    id: "5",
    name: "Inception",
    urlName: "inception",
    releaseDate: '2010-07-13',
    description: "Action & Adventure",
    rating: 8.8,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 158
  },
  {
    id: "6",
    name: "Reservoir dogs",
    urlName: "reservoir-dogs",
    releaseDate: '1992-10-08',
    description: "Oscar winning Models",
    rating: 8.3,
    genre: [{ value: "crime", label: "Crime" }],
    runtime: 99
  },
];

export const initialState: State = {
  name: '',
  releaseDate: '',
  urlName: '',
  rating: '',
  genre: [],
  runtime: '',
  description: ''
};

export const genreOptions: Option[] = [
  { value: "documentary", label: "Documentary" },
  { value: "comedy", label: "Comedy" },
  { value: "horror", label: "Horror" },
  { value: "crime", label: "Crime" }
];
