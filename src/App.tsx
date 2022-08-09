import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "containers/Header/Header";
import Main from "containers/Main/Main";
import Footer from "containers/Footer/Footer";
import ModalWindow from "components/ModalWindow/ModalWindow";
import "App.css";
import MovieDetail from "components/MovieDetail/MovieDetail";
// import { useAppSelector, useAppDispatch } from "hooks/hooks";
// import { fetchMovies } from "features/movies/moviesSelector";
// import { StatusType } from "models/movie";
import NotFound from "components/NotFound/NotFound";
import AppLayout from "./containers/AppLayout/AppLayout";

const App: React.FC = () => {
  // const { status, selectedMovie } = useAppSelector((state) => state.movies);
  // const { isOpen } = useAppSelector((state) => state.modalWindow);
  // const dispatch = useAppDispatch();
  //
  // useEffect(() => {
  //   if (status === StatusType.Idle) {
  //     dispatch(fetchMovies());
  //   }
  // }, [status, dispatch]);
  return (
    <>
      <Routes>
        <Route path="/search/*" element={<AppLayout />} />
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*{selectedMovie ? <MovieDetail /> : <Header />}*/}
      {/*<Main />*/}
      {/*<Footer />*/}
      {/*{isOpen && <ModalWindow />}*/}
    </>
  );
};

export default App;
