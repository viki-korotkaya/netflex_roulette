import React, { useEffect, useState } from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import "./App.css";
import { Mode, Movie } from "./models/movie";
import { fetchMovies } from "./api/movieService";

const App: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.Default);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(
    null
  );
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    fetchMovies().then((data: Movie[]) => setMovies(data));
  };

  const openModalHandler = (mode: Mode, movie?: Movie) => {
    setMode(mode);
    if (movie) setSelectedMovie(movie);
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <Header openModal={openModalHandler} />
      <Main movieList={movies} openModal={openModalHandler} />
      <Footer />
      {isOpenModal && (
        <ModalWindow
          closeHandler={closeModalHandler}
          editedMovie={selectedMovie}
          mode={mode}
          loadMovies={loadMovies}
        />
      )}
    </>
  );
};

export default App;
