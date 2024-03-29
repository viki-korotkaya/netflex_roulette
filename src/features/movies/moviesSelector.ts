import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie, MovieServerFormat, StatusType } from "models/movie";
import { RootState } from "store/store";
import {
  getMovies,
  postMovie,
  updateMovie,
  deleteSelectedMovie,
  getMovie,
} from "api/movieService";

export interface MoviesState {
  moviesList: Movie[];
  status: StatusType;
  error: string | undefined;
  selectedMovie: Movie | null;
}

const initialState: MoviesState = {
  moviesList: [] as Movie[],
  status: StatusType.Idle,
  error: undefined,
  selectedMovie: null,
};

export interface MovieListResponse {
  data: MovieServerFormat[];
}

export const fetchMovies = createAsyncThunk<MovieListResponse, any>(
  "movies/fetchMovies",
  (query) => {
    return getMovies(query);
  }
);

export const fetchMovie = createAsyncThunk<
  MovieServerFormat,
  number,
  { rejectValue: string }
>("movies/fetchMovie", (id) => getMovie(id));

export const editMovie = createAsyncThunk<
  MovieServerFormat,
  Movie,
  { rejectValue: string }
>("movies/editMovie", (editedMovie) => updateMovie(editedMovie));

export const addMovie = createAsyncThunk<
  MovieServerFormat,
  Partial<Movie>,
  { rejectValue: string }
>("movies/addMovie", (newMovie) => postMovie(newMovie));

export const deleteMovie = createAsyncThunk<
  any,
  number,
  { rejectValue: string }
>("movies/deleteMovie", (index) => deleteSelectedMovie(index));

function transformMovieList(movie: any) {
  return {
    title: movie.title,
    tagline: movie.tagline,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    movieUrl: movie.poster_path,
    overview: movie.overview,
    runtime: movie.runtime,
    genres: movie.genres,
    id: movie.id,
  };
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetSelectedMovie(state) {
      state.selectedMovie = null;
    },
    resetState(state) {
      state.status = StatusType.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = StatusType.Pending;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = StatusType.Success;
        const newData = action.payload.data.map((item: any) =>
          transformMovieList(item)
        );
        state.moviesList = newData;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = StatusType.Failed;
        state.error = action.error.message;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.selectedMovie = transformMovieList(action.payload);
      });
  },
});

export const selectMovies = (state: RootState) => state.movies.moviesList;
export const moviesAction = moviesSlice.actions;
export default moviesSlice.reducer;
