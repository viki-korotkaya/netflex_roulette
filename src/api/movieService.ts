import { movieList } from "../assets/data/constData";
import { Movie } from "../models/movie";

let movies = [...movieList];

export const fetchMovies: () => Promise<Movie[]> = () => {
  return new Promise((res, rej) => {
    return setTimeout(() => res(movies), 0);
  });
};

export const addMovie = (newMovie: Movie) => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      movies = [...movies, newMovie];
      return res(true);
    }, 1000)
  );
};

export const editMovie = (movie: Movie, id: string ) => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      let updatedList = [...movies];
      const indexOfMovie = updatedList.findIndex((movie) => movie.id === id);
      updatedList[indexOfMovie] = movie;
      movies = updatedList;
      return res(true);
    }, 1000)
  );
};

export const deleteMovie = (id: string | undefined) => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      let updatedList = [...movies];
      const indexOfMovie = updatedList.findIndex((movie) => movie.id === id);
      updatedList.splice(indexOfMovie, 1);
      movies = updatedList;
      return res(true);
    }, 1000)
  );
};
