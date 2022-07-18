import React, { useEffect, useState } from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import "./App.css";
import { Mode, Movie } from "./models/movie";
import { fetchMovies } from "./api/movieService";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import {AppContext} from "./Context";

const App: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.Default);
  const [editedMovie, setEditedMovie] = useState<Movie | null>(
    null
  );
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    fetchMovies().then((data: Movie[]) => setMovies(data));
  };

  const openModalHandler = (mode: Mode, movie?: Movie) => {
    setMode(mode);
    if (movie) setEditedMovie(movie);
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
    setEditedMovie(null);
  };

  return (
    <AppContext.Provider value={{selectedMovie, setSelectedMovie}}>
      {selectedMovie ? <MovieDetail /> : <Header openModal={openModalHandler} />}
      <Main movieList={movies} openModal={openModalHandler} />
      <Footer />
      {isOpenModal && (
        <ModalWindow
          closeHandler={closeModalHandler}
          editedMovie={editedMovie}
          mode={mode}
          loadMovies={loadMovies}
        />
      )}
    </AppContext.Provider>
  );
};

export default App;
