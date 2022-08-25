import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import moviesReducer, { MoviesState } from "features/movies/moviesSelector";
import modalWindowReducer, {
  ModalWindowState,
} from "features/modalWindow/modalWindowSelector";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      movies: moviesReducer,
      modalWindow: modalWindowReducer,
    },
  });

// @ts-ignore

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
// export type AppDispatch = typeof makeStore.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
