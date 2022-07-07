import { Movie } from "../../models/movie";

export const nav = ["all", "documentary", "comedy", "horror", "crime"];

export const sortBy = ["release date"];

export let movieList: Movie[] = [
  {
    id: "1",
    name: "Pulp Fiction",
    urlName: "pulp-fiction",
    releaseDate: '2004',
    description: "Action $ Adventure",
    rating: 8.9,
    genre: "crime",
    runtime: 168
  },
  {
    id: "2",
    name: "Bohemian Rhapsody",
    urlName: "bohemian-rhapsody",
    releaseDate: '2003',
    description: "Drama, Biography, Music",
    rating: 7.9,
    genre: "drama",
    runtime: 134
  },
  {
    id: "3",
    name: "Kill Bill: Vol 2",
    urlName: "kill-bill",
    releaseDate: '1994',
    description: "Oscar winning Movie",
    rating: 8,
    genre: "crime",
    runtime: 135
  },
  {
    id: "4",
    name: "Avengers: war of Infinity",
    urlName: "avengers",
    releaseDate: '2004',
    description: "Action & Adventure",
    rating: 8.4,
    genre: "crime",
    runtime: 159
  },
  {
    id: "5",
    name: "Inception",
    urlName: "inception",
    releaseDate: '2003',
    description: "Action & Adventure",
    rating: 8.8,
    genre: "crime",
    runtime: 158
  },
  {
    id: "6",
    name: "Reservoir dogs",
    urlName: "reservoir-dogs",
    releaseDate: '1994',
    description: "Oscar winning Movie",
    rating: 8.3,
    genre: "crime",
    runtime: 99
  },
];

export const initialState = {
  name: '',
  releaseDate: '',
  urlName: '',
  rating: '',
  genre: 'default',
  runtime: '',
  description: ''
}
