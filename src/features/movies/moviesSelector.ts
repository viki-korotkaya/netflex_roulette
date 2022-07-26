import {createSlice, createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {Movie} from "../../models/movie";
import {RootState} from "../../store/store";
import {getMovies, postMovie, updateMovie, deleteSelectedMovie} from "../../api/movieService";

export interface MoviesState {
  moviesList: Movie[],
  status: 'idle' | 'pending' | 'success' | 'failed',
  error: string | undefined
}

const initialState: MoviesState = {
  moviesList: [] as Movie[],
  status: 'idle',
  error: undefined
}

export interface MovieListResponse {
  data: Movie[],
}

export const fetchMovies = createAsyncThunk<MovieListResponse, void, {rejectValue: string}>(
  'movies/fetchMovies', () => getMovies()
)

export const editMovie = createAsyncThunk<Movie, Movie, {rejectValue: string}>(
  'movies/editMovie', (editedMovie) => updateMovie(editedMovie)
)

export const addMovie = createAsyncThunk<Movie, Partial<Movie>, {rejectValue: string}>(
  'movies/addMovie', (newMovie) => postMovie(newMovie)
)

export const deleteMovie = createAsyncThunk<any, number, {rejectValue: string}>(
  'movies/deleteMovie', (index) =>  {
    deleteSelectedMovie(index);
    return index;
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

  },
  extraReducers(builder){
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'success'
        state.moviesList = action.payload.data
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(editMovie.fulfilled, (state, action) => {
        let index = state.moviesList.findIndex((movie) => movie.id === action.payload.id);
        state.moviesList.splice(index, 1, action.payload)
      })
      .addCase(editMovie.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.moviesList.push(action.payload)
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        let index = state.moviesList.findIndex((movie) => movie.id === action.payload);
        state.moviesList.splice(index, 1);
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const selectMovies = (state: RootState) => state.movies.moviesList;

export default moviesSlice.reducer;

