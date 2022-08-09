import React, { useEffect } from "react";

import Header from "containers/Header/Header";
import Main from "containers/Main/Main";
import Footer from "containers/Footer/Footer";
import ModalWindow from "components/ModalWindow/ModalWindow";
import "App.css";
import MovieDetail from "components/MovieDetail/MovieDetail";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
import { fetchMovies } from "features/movies/moviesSelector";
import { StatusType } from "models/movie";
import { Route, Routes } from "react-router-dom";

const AppLayout: React.FC = () => {
  const { status, selectedMovie } = useAppSelector((state) => state.movies);
  const { isOpen } = useAppSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === StatusType.Idle) {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);
  return (
    <>
      <Routes>
        <Route path="/movie" element={<MovieDetail />} />
        <Route index element={<Header />} />
      </Routes>
      <Main />
      <Footer />
      {isOpen && <ModalWindow />}
    </>
  );
};

export default AppLayout;
