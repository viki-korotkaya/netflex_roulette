import React, { useEffect } from "react";
import Header from "containers/Header/Header";
import Main from "containers/Main/Main";
import Footer from "containers/Footer/Footer";
import ModalWindow from "components/ModalWindow/ModalWindow";
import "App.css";
import MovieDetail from "components/MovieDetail/MovieDetail";
import {
  useAppSelector,
  useAppDispatch,
  useMovieSearchParams,
} from "hooks/hooks";
import {
  fetchMovies,
  fetchMovie,
  moviesAction,
} from "features/movies/moviesSelector";
import { SearchQuery } from "models/movie";

const AppLayout: React.FC = () => {
  const { selectedMovie } = useAppSelector((state) => state.movies);
  const { isOpen } = useAppSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();
  const { selectedMovieId, filterQuery, sortQuery, searchKey } =
    useMovieSearchParams();

  useEffect(() => {
    let searchQuery: SearchQuery = {};
    if (filterQuery) {
      searchQuery.filter = filterQuery;
    }
    if (sortQuery) {
      searchQuery.sortBy = sortQuery;
    }
    if (searchKey) {
      searchQuery.search = searchKey;
    }
    dispatch(fetchMovies(searchQuery));
  }, [filterQuery, sortQuery, searchKey, dispatch]);

  useEffect(() => {
    if (selectedMovieId) {
      dispatch(fetchMovie(+selectedMovieId));
    } else {
      dispatch(moviesAction.resetSelectedMovie());
    }
  }, [selectedMovieId, dispatch]);

  return (
    <>
      {selectedMovie ? <MovieDetail /> : <Header />}
      <Main />
      <Footer />
      {isOpen && <ModalWindow />}
    </>
  );
};

export default AppLayout;
