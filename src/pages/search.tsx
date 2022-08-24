import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import { useRouter } from "next/router";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";
import ModalWindow from "components/ModalWindow/ModalWindow";
import MovieDetail from "components/MovieDetail/MovieDetail";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
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
  const { query } = useRouter();

  useEffect(() => {
    let searchQuery: any = {};
    if (query.filter) {
      searchQuery.filter = query.filter;
    }
    if (query.sortBy) {
      searchQuery.sortBy = query.sortBy;
    }
    if (query.searchKey) {
      searchQuery.search = query.searchKey;
    }
    dispatch(fetchMovies(searchQuery));
  }, [query.filter, query.sortBy, query.searchKey, dispatch]);

  useEffect(() => {
    if (query.movie) {
      dispatch(fetchMovie(+query.movie));
    } else {
      dispatch(moviesAction.resetSelectedMovie());
    }
  }, [query.movie, dispatch]);

  return (
    <Provider store={store}>
      {selectedMovie ? <MovieDetail /> : <Header />}
      <Main />
      <Footer />
      {isOpen && <ModalWindow />}
    </Provider>
  );
};

export default AppLayout;
