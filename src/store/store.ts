import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSelector";
import modalWindowReducer from "../features/modalWindow/modalWindowSelector";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    modalWindow: modalWindowReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
