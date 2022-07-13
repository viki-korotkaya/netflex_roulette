import React, {useEffect, useState} from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./containers/Footer/Footer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import "./App.css";
import {initialState} from "./assets/data/constData";
import {Movie, State} from "./models/movie";
import { movieList } from "./assets/data/constData";
import {fetchMovies} from "./api/movieService";

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [mode, setMode] = useState('');
  const [initialDate, setInitialDate] = useState<State | Movie>(initialState);
  const [movies, setMovies] = useState<Movie[] | []>([]);

  useEffect(() => {
    loadMovies();
  });

  const callHandler = (mode?: string, state?: State | Movie ) => {
    if (mode) {
      setMode(mode);
      setInitialDate(initialState);
    }
    if (state) {
      setInitialDate(state);
    }
    setOpenModal(!openModal);
  };

  const loadMovies = () => {
    fetchMovies().then((data: Movie[] | []) => setMovies(data));
  }

  return (
    <>
      <Header open={openModal} toggleHandler={callHandler} />
      <Main open={openModal} toggleHandler={callHandler} movieList={movies} />
      <Footer />
      {openModal && <ModalWindow closeHandler={callHandler} initialState={initialDate} mode={mode} loadMovies={loadMovies} />}
    </>
  );
};

export default App;
