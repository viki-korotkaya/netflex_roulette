import React, {SyntheticEvent, useEffect, useState} from "react";
import {
  CloseBtn,
  ModalContent,
  StyledFlex,
  StyledModal,
} from "./ModalWindow.styled";
import AddModalWindow from "./AddModal/AddModal";
import DeleteModalWindow from "./DeleteModal/DeleteModal";
import SuccessModalWindow from "./SuccessModal/SuccessModal";
import { MovieFormProps, Mode, Movie } from "../../models/movie";
import { formInitial } from "../../assets/data/constData";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {addMovie, editMovie, deleteMovie, fetchMovies} from "../../features/movies/moviesSelector";
import { modalWindowAction } from "../../features/modalWindow/modalWindowSelector";



const getInitialMovieForm = (movie: Movie) => {
  return {
    ...movie,
    genres: movie.genres.map((str) => ({ value: str}))
  }
}

const ModalWindow: React.FC = () => {
  const { mode, editedMovie} = useAppSelector((state) => state.modalWindow);
  const movieInitial = editedMovie ? getInitialMovieForm(editedMovie) : formInitial;
  const [form, setState] = useState<MovieFormProps>(movieInitial);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  const handleFormReset = (e: SyntheticEvent) => {
    setState(movieInitial);
    e.preventDefault();
  };

  const handleOnChange = (e: SyntheticEvent) => {
    let target = e.target as HTMLFormElement;
    setState({ ...form, [target.name]: target.type === "number" ? parseInt(target.value, 10) : target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (mode === Mode.Edit && editedMovie) {
      const movie: Movie = {
        ...editedMovie,
        ...form,
        genres: form.genres.map(o => o.value)
      };
      dispatch(editMovie(movie)).unwrap().then(() => {
          setStep(2);
          setMessage("The movie has been edited successfully");
      }).catch((e) => console.log(e));
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

  const handleGenreChange = (
    selectedList: any[]
  ) => {
    console.log(selectedList);
    setState({ ...form, genres: selectedList});
  };

  const handleDeleteMovie = () => {
    if (!editedMovie) return false;
    dispatch(deleteMovie(editedMovie.id)).unwrap().then(() => {
      setStep(2);
      setMessage("The movie has been deleted successfully");
    }).catch((e) => console.log(e));
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
        ) : mode === "delete" ? (
          <DeleteModalWindow handleDeleteMovie={handleDeleteMovie} />
        ) : (
          <AddModalWindow
            form={form}
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            handleFormReset={handleFormReset}
            handleGenreChange={handleGenreChange}
            mode={mode}
          />
        )}
      </ModalContent>
    </StyledModal>
  );
};

export default ModalWindow;
