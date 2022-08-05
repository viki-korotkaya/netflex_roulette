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
import { MovieFormProps, Mode, Movie } from "models/movie";
import { formInitial } from "assets/data/constData";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { addMovie, editMovie, deleteMovie, fetchMovie } from "features/movies/moviesSelector";
import { modalWindowAction } from "features/modalWindow/modalWindowSelector";
import { moviesAction } from "features/movies/moviesSelector";

const getInitialMovieForm = (movie: Movie) => {
  return {
    ...movie,
    genres: movie.genres.map((str) => ({ value: str}))
  }
}

const ModalWindow: React.FC = () => {
  const { mode, editedMovie} = useAppSelector((state) => state.modalWindow);
  const { selectedMovie} = useAppSelector((state) => state.movies);
  const movieInitial = editedMovie ? getInitialMovieForm(editedMovie) : formInitial;
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (form: MovieFormProps) => {
    if (mode === Mode.Edit && editedMovie) {
      const movie: Movie = {
        ...editedMovie,
        ...form,
        genres: form.genres.map(o => o.value)
      };
      dispatch(editMovie(movie))
        .unwrap()
        .then(() => {
          setStep(2);
          setMessage("The movie has been edited successfully");
        })
        .catch((e) => {
          console.log(e)
        }).then(() => {
          if (movie.id === selectedMovie?.id) {
            dispatch(fetchMovie(movie.id))
          }
        }
      );
    } else {
      const movie: Partial<Movie> = {
        ...form,
        genres: form.genres.map(o => o.value)
      };
      dispatch(addMovie(movie)).unwrap().then(() => {
          setStep(2);
          setMessage("The movie has been added successfully to database");
      }).catch((e) => console.log(e));
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
        if (editedMovie.id === selectedMovie?.id) {
          dispatch(moviesAction.resetSelectedMovie());
        }
      });
  };

  const closeHandler = () => {
    dispatch(modalWindowAction.closeModal())
  }

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
