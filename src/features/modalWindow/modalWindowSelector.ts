import { createSlice } from "@reduxjs/toolkit";
import { Mode, Movie } from "models/movie";

export interface ModalWindowState {
  isOpen: boolean;
  mode: Mode;
  editedMovie: Movie | null;
}

const initialState: ModalWindowState = {
  isOpen: false,
  mode: Mode.Default,
  editedMovie: null,
};

export const modalWindowSlice = createSlice({
  name: "modalWindow",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.mode = action.payload.mode;
      if (action.payload.editedMovie) {
        state.editedMovie = action.payload.editedMovie;
      }
    },
    closeModal(state) {
      state.isOpen = false;
      state.mode = Mode.Default;
      state.editedMovie = null;
    },
  },
});

export const modalWindowAction = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
