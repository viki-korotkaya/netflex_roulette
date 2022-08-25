import React, { useEffect } from "react";
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
  transformMovieList,
} from "features/movies/moviesSelector";
import { getMovie, getMovies } from "api/movieService";
import { StatusType } from "../models/movie";

const AppLayout: React.FC = () => {
  const { selectedMovie, status } = useAppSelector((state) => state.movies);
  const { isOpen } = useAppSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();
  const { query } = useRouter();

  useEffect(() => {
    if (status !== StatusType.Success) {
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
    }
  }, [status, query.filter, query.sortBy, query.searchKey, dispatch]);

  useEffect(() => {
    if (query.movie) {
      dispatch(fetchMovie(+query.movie));
    } else {
      dispatch(moviesAction.resetSelectedMovie());
    }
  }, [query.movie, dispatch]);

  useEffect(() => {
    dispatch(moviesAction.setState());
  }, []);

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

// @ts-ignore
export async function getServerSideProps(context) {
  const { query } = context;
  const allFetches = [];
  let searchQuery: any = {};
  if (query?.filter) {
    searchQuery.filter = query.filter;
  }
  if (query?.sortBy) {
    searchQuery.sortBy = query.sortBy;
  }
  if (query?.searchKey) {
    searchQuery.search = query.searchKey;
  }
  allFetches.push(getMovies(searchQuery));
  if (query?.movie) allFetches.push(getMovie(+query.movie));
  const res = await Promise.all(allFetches);
  const newData = res[0].data.map((item: any) => transformMovieList(item));
  const selectedMovie = res[1] ? transformMovieList(res[1]) : null;
  return {
    props: {
      initialState: {
        movies: {
          moviesList: newData,
          selectedMovie: selectedMovie,
          error: undefined,
        },
      },
    },
  };
}
