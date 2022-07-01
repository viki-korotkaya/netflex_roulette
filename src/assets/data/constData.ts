import { Movie } from "../../models/movie";

export const nav = ["all", "documentary", "comedy", "horror", "crime"];

export const sortBy = ["release date"];

export const movieList: Movie[] = [
  {
    id: "1",
    name: "Pulp Fiction",
    urlName: "pulp-fiction",
    releaseDate: 2004,
    description: "Action $ Adventure",
  },
  {
    id: "2",
    name: "Bohemian Rhapsody",
    urlName: "bohemian-rhapsody",
    releaseDate: 2003,
    description: "Drama, Biography, Music",
  },
  {
    id: "3",
    name: "Kill Bill: Vol 2",
    urlName: "kill-bill",
    releaseDate: 1994,
    description: "Oscar winning Movie",
  },
  {
    id: "4",
    name: "Avengers: war of Infinity",
    urlName: "avengers",
    releaseDate: 2004,
    description: "Action & Adventure",
  },
  {
    id: "5",
    name: "Inception",
    urlName: "inception",
    releaseDate: 2003,
    description: "Action & Adventure",
  },
  {
    id: "6",
    name: "Reservoir dogs",
    urlName: "reservoir-dogs",
    releaseDate: 1994,
    description: "Oscar winning Movie",
  },
];
