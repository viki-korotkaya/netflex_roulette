import React, { SyntheticEvent, useState } from "react";
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
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import {addMovie, editMovie, deleteMovie} from "../../features/movies/moviesSelector";

interface ModalWindowProps {
  closeHandler: () => void;
  mode: Mode;
  editedMovie: Movie | null;
}

const getInitialMovieForm = (movie: Movie) => {
  return {
    ...movie,
    genres: movie.genres.map((str) => ({ value: str}))
  }
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  closeHandler,
  editedMovie,
  mode
}) => {
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
      dispatch(editMovie(movie)).then(() => {
        setStep(2);
        setMessage("The movie has been edited successfully");
      })
    } else {
      const movie: Partial<Movie> = {
        ...form,
        genres: form.genres.map(o => o.value)
      };
      dispatch(addMovie(movie));
      setStep(2);
      setMessage("The movie has been added to database successfully");
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
    dispatch(deleteMovie(editedMovie.id));
    setStep(2);
    setMessage("The movie has been edited successfully");
    // deleteMovie(editedMovie?.id).then((res) => {
    //   setStep(2);
    //   setMessage("The movie has been deleted successfully");
    // });
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
