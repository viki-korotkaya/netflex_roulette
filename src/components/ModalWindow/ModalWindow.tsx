import React, { SyntheticEvent, useState } from "react";
import {
  CloseBtn,
  ModalContent,
  StyledFlex,
  StyledModal,
} from "./ModalWindow.styled";
import AddModalWindow from "./AddModal/AddModal";
import DeleteModalWindow from "./DeleteModal/DeleteModal";
import { addMovie, deleteMovie, editMovie } from "../../api/movieService";
import SuccessModalWindow from "./SuccessModal/SuccessModal";
import {formInitialForMovie, Mode, Movie} from "../../models/movie";
import { formInitial } from "../../assets/data/constData";

interface ModalWindowProps {
  closeHandler: () => void;
  loadMovies: () => void;
  mode: Mode;
  editedMovie?: Movie;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  closeHandler,
  editedMovie,
  mode,
  loadMovies,
}) => {
  const movieInitial = editedMovie ? editedMovie : formInitial;
  const getInitialForm = (initial: formInitialForMovie) =>{
    return {
      title: initial.title,
      releaseDate: initial.releaseDate,
      url: initial.url,
      rating: initial.rating,
      genre: initial.genre,
      runtime: initial.runtime,
      overview: initial.overview
    }
  }
  const [form, setState] = useState<formInitialForMovie>(() => getInitialForm(movieInitial));
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");



  const handleFormReset = (e: SyntheticEvent) => {
    const newForm = getInitialForm(movieInitial);
    setState(newForm);
    e.preventDefault();
  };

  const handleOnChange = (e: SyntheticEvent) => {
    let target = e.target as HTMLFormElement;
    setState({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    let movie = {} as Movie;
    movie.id = editedMovie ? editedMovie.id : Date.now().toString();
    movie.title = form.title;
    movie.url = form.url;
    movie.releaseDate = form.releaseDate;
    movie.overview = form.overview;
    movie.rating = form.rating;
    movie.genre = form.genre;
    movie.runtime = form.runtime;
    if (mode === Mode.EDIT) {
      editMovie(movie, editedMovie?.id).then((res) => {
        setStep(2);
        setMessage("The movie has been edited successfully");
        loadMovies();
      });
    } else {
      addMovie(movie).then((res) => {
        setStep(2);
        setMessage("The movie has been added to database successfully");
        loadMovies();
      });
    }
  };

  const handleGenreChange = (
    selectedList: { value: string; label: string }[] | []
  ) => {
    setState({ ...form, genre: selectedList });
  };

  const handleDeleteMovie = () => {
    deleteMovie(editedMovie?.id).then((res) => {
      setStep(2);
      setMessage("The movie has been deleted successfully");
      loadMovies();
    });
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
