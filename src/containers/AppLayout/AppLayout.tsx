import React, { useEffect } from "react";

import Header from "containers/Header/Header";
import Main from "containers/Main/Main";
import Footer from "containers/Footer/Footer";
import ModalWindow from "components/ModalWindow/ModalWindow";
import "App.css";
import MovieDetail from "components/MovieDetail/MovieDetail";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
import {
  fetchMovies,
  fetchMovie,
  moviesAction,
} from "features/movies/moviesSelector";
import { StatusType } from "models/movie";
import { Outlet, Route, Routes, useSearchParams } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";

const AppLayout: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedMovieId = searchParams.get("movie");
  const filterQuery = searchParams.get("filter");
  const sortQuery = searchParams.get("sortBy");
  const searchKey = searchParams.get("searchKey");
  const { status, selectedMovie } = useAppSelector((state) => state.movies);
  const { isOpen } = useAppSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let searchQuery: any = {};
    if (filterQuery) {
      searchQuery.filter = filterQuery;
    }
    if (sortQuery) {
      searchQuery.sortBy = sortQuery;
    }
    if (searchKey) {
      searchQuery.search = searchKey;
    }
    if (status === StatusType.Idle) {
      dispatch(fetchMovies(searchQuery));
    }
  }, [status]);

  useEffect(() => {
    if (selectedMovieId && +selectedMovieId !== selectedMovie?.id) {
      dispatch(fetchMovie(+selectedMovieId));
    } else if (!selectedMovieId && selectedMovie?.id) {
      dispatch(moviesAction.resetSelectedMovie());
    }
  }, [selectedMovieId]);

  return (
    <>
      {/*<Routes>*/}
      {/*  <Route path="/movie" element={<MovieDetail />} />*/}
      {/*  <Route index element={<Header />} />*/}
      {/*  <Route path="*" element={<NotFound />} />*/}
      {/*</Routes>*/}
      {selectedMovie ? <MovieDetail /> : <Header />}
      <Outlet />
      <Main />
      <Footer />
      {isOpen && <ModalWindow />}
    </>
  );
};

export default AppLayout;
