import React, { useEffect, useState } from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import "./App.css";
import { Mode, Movie } from "./models/movie";

import MovieDetail from "./components/MovieDetail/MovieDetail";
import { AppContext } from "./Context";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { fetchMovies } from "./features/movies/moviesSelector";

const App: React.FC = () => {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.Default);
  const [editedMovie, setEditedMovie] = useState<Movie | null>(null);
  const { status, selectedMovie} = useAppSelector((state) => state.movies);
  const { isOpen } = useAppSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle'){
      dispatch(fetchMovies())
    }
  }, [status, dispatch]);

  // const openModalHandler = (mode: Mode, movie?: Movie) => {
  //   setMode(mode);
  //   if (movie) setEditedMovie(movie);
  //   setIsOpenModal(true);
  // };
  //
  // const closeModalHandler = () => {
  //   setIsOpenModal(false);
  //   setEditedMovie(null);
  // };

  return (
    <>
      {selectedMovie ? <MovieDetail /> : <Header />}
        <Main />
        <Footer />
        {isOpen && <ModalWindow />}
    </>
  );
};

export default App;
