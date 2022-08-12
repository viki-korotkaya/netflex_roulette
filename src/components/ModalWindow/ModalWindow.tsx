import React, { useState } from "react";
import {
  CloseBtn,
  ModalContent,
  StyledFlex,
  StyledModal,
} from "components/ModalWindow/ModalWindow.styled";
import AddModalWindow from "components/ModalWindow/AddModal/AddModal";
import DeleteModalWindow from "components/ModalWindow/DeleteModal/DeleteModal";
import SuccessModalWindow from "components/ModalWindow/SuccessModal/SuccessModal";
import { MovieFormProps, Mode, Movie, SearchQuery } from "models/movie";
import { formInitial } from "assets/data/constData";
import {
  useAppDispatch,
  useAppSelector,
  useMovieSearchParams,
} from "hooks/hooks";
import {
  addMovie,
  editMovie,
  deleteMovie,
  fetchMovie,
  fetchMovies,
} from "features/movies/moviesSelector";
import { modalWindowAction } from "features/modalWindow/modalWindowSelector";
import { moviesAction } from "features/movies/moviesSelector";

const getInitialMovieForm = (movie: Movie) => {
  return {
    ...movie,
    genres: movie.genres.map((str) => ({ value: str })),
  };
};

const ModalWindow: React.FC = () => {
  const { mode, editedMovie } = useAppSelector((state) => state.modalWindow);
  const movieInitial = editedMovie
    ? getInitialMovieForm(editedMovie)
    : formInitial;
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  const { selectedMovieId, filterQuery, sortQuery, searchKey } =
    useMovieSearchParams();

  const createSearchQueries = () => {
    const searchQuery: SearchQuery = {};
    if (filterQuery) {
      searchQuery.filter = filterQuery;
    }
    if (sortQuery) {
      searchQuery.sortBy = sortQuery;
    }
    if (searchKey) {
      searchQuery.search = searchKey;
    }
    return searchQuery;
  };

  const handleSubmit = (form: MovieFormProps) => {
    if (mode === Mode.Edit && editedMovie) {
      const movie: Movie = {
        ...editedMovie,
        ...form,
        genres: form.genres.map((o) => o.value),
      };
      dispatch(editMovie(movie))
        .unwrap()
        .then(() => {
          setStep(2);
          setMessage("The movie has been edited successfully");
        })
        .catch((e) => {
          console.log(e);
        })
        .then(() => {
          dispatch(fetchMovies(createSearchQueries()));
          if (selectedMovieId && movie.id === +selectedMovieId) {
            dispatch(fetchMovie(movie.id));
          }
        });
    } else {
      const movie: Partial<Movie> = {
        ...form,
        genres: form.genres.map((o) => o.value),
      };
      dispatch(addMovie(movie))
        .unwrap()
        .then(() => {
          setStep(2);
          setMessage("The movie has been added successfully to database");
        })
        .catch((e) => console.log(e))
        .then(() => {
          dispatch(fetchMovies(createSearchQueries()));
        });
    }
  };

  const handleDeleteMovie = () => {
    if (!editedMovie) return false;
    dispatch(deleteMovie(editedMovie.id))
      .unwrap()
      .then(() => {
        setStep(2);
        setMessage("The movie has been deleted successfully");
      })
      .catch((e) => console.log(e))
      .then(() => {
        dispatch(fetchMovies(createSearchQueries()));
        if (selectedMovieId && editedMovie.id === +selectedMovieId) {
          dispatch(moviesAction.resetSelectedMovie());
        }
      });
  };

  const closeHandler = () => {
    dispatch(modalWindowAction.closeModal());
  };

  return (
    <StyledModal onClick={closeHandler}>
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <StyledFlex>
          <CloseBtn onClick={closeHandler}>&times;</CloseBtn>
        </StyledFlex>
        {step === 2 ? (
          <SuccessModalWindow message={message} />
        ) : mode === Mode.Delete ? (
          <DeleteModalWindow handleDeleteMovie={handleDeleteMovie} />
        ) : (
          <AddModalWindow
            initialValues={movieInitial}
            submitHandler={handleSubmit}
            mode={mode}
          />
        )}
      </ModalContent>
    </StyledModal>
  );
};

export default ModalWindow;
