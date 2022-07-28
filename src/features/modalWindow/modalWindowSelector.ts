import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Mode, Movie } from "../../models/movie";

interface ModalWindowState {
  isOpen: boolean,
  mode: Mode,
  editedMovie: Movie | null
}

const initialState: ModalWindowState = {
  isOpen: false,
  mode: Mode.Default,
  editedMovie: null
}

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {
      toggleWindow(state){
        state.isOpen = !state.isOpen
      },
      setMode(state, action){
        state.mode = action.payload
      },
      resetMode(state){
        state.mode = Mode.Default
      },
      setEditedMove(state, action){
        state.editedMovie = action.payload
      },
      removeEditedMovie(state){
        state.editedMovie = null
      },
      openModal(state, action){
        state.isOpen = true
        state.mode = action.payload.mode
        if (action.payload.editedMovie){
          state.editedMovie = action.payload.editedMovie
        }
      },
      closeModal(state){
        state.isOpen = false
        state.mode = Mode.Default
        state.editedMovie = null
      }
    }
});

export const modalWindowAction = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
