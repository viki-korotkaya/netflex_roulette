import {movieList} from "../assets/data/constData";
import {Movie} from "../models/movie";


export const fetchMovies: () => Promise<Movie[]> = () => {
  return new Promise((res,rej) => {
    return setTimeout(() => res(movieList), 0);
  });
};

export const addMovie = (newMovie: Movie) => {
  return new Promise((res, rej) => setTimeout(() => {
    movieList.push(newMovie);
    return res(true);
  }, 1000))
};

export const editMovie = (movie: Movie, id: string | undefined) => {
  return new Promise((res, rej) => setTimeout(() => {
    const indexOfMovie = movieList.findIndex(movie => movie.id === id)
    movieList[indexOfMovie] = movie;
    return res(true);
  }, 1000))
};


export const deleteMovie = (id: string | undefined) => {
  return new Promise((res, rej) => setTimeout(() => {
    const indexOfMovie = movieList.findIndex(movie => movie.id === id)
    movieList.splice(indexOfMovie, 1);
    return res(true);
  }, 1000))
}
