import React, {SyntheticEvent, useState} from "react";
import {
    StyledModal,
    ModalContent,
    StyledFlex,
    CloseBtn
} from "./ModalWindow.styled";
import {movieList} from "../../assets/data/constData";
import AddModalWindow from "./AddModal/AddModal";
import DeleteModalWindow from "./DeleteModal/DeleteModal";
import {addMovie, editMovie, deleteMovie} from "../../api/movieService";
import SuccessModalWindow from "./SuccessModal/SuccessModal";

interface ModalWindowProps {
    closeHandler: () => void;
    loadMovies: () => void;
    mode: string;
    initialState: {
        id?: string,
        name: string,
        releaseDate: string,
        urlName: string,
        rating: string | number,
        genre: { value: string, label: string }[] | [],
        runtime: string | number,
        description: string
    }
};

type Movie = {
    id: string;
    name: string;
    urlName: string;
    releaseDate: string;
    description: string;
    rating: number;
    genre: { value: string, label: string }[] | [];
    runtime: number;
}

const ModalWindow: React.FC<ModalWindowProps> = ({closeHandler, initialState, mode, loadMovies}) => {
    const [form, setState] = useState({
        title: initialState.name,
        releaseDate: initialState.releaseDate,
        url: initialState.urlName,
        rating: initialState.rating,
        genre: initialState.genre,
        runtime: initialState.runtime,
        overview: initialState.description
    });
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState('');


    const handleFormReset = (e: SyntheticEvent) => {
        let newForm = {...form};
        newForm.title = initialState.name;
        newForm.releaseDate = initialState.releaseDate;
        newForm.url = initialState.urlName;
        newForm.rating = initialState.rating;
        newForm.genre = initialState.genre;
        newForm.runtime = initialState.runtime;
        newForm.overview = initialState.description;
        setState(newForm);
        e.preventDefault();
    }

    const handleOnChange = (e: SyntheticEvent) => {
        let target = e.target as HTMLFormElement;
        setState({...form, [target.name]: target.value});
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        let movie = {} as Movie;
        movie.id = initialState.id ? initialState.id : (movieList.length + 1).toString();
        movie.name = form.title;
        movie.urlName = form.url;
        movie.releaseDate = form.releaseDate;
        movie.description = form.overview;
        movie.rating = +form.rating;
        movie.genre = form.genre;
        movie.runtime = +form.runtime;
        if (mode === 'edit'){
            editMovie(movie, initialState.id).then((res) => {
                setStep(2);
                setMessage('The movie has been edited successfully');
                loadMovies();
            });
        } else {
            addMovie(movie).then((res) => {
                setStep(2);
                setMessage('The movie has been added to database successfully');
                loadMovies();
            });
        }
    }

    const handleGenreChange = (selectedList: { value: string, label: string }[] | [], selectedItem?: any) => {
        setState({...form, genre: selectedList});
    };

    const handleDeleteMovie = () => {
        deleteMovie(initialState.id).then((res) => {
            setStep(2);
            setMessage('The movie has been deleted successfully');
            loadMovies();
        });
    }

    return (
        <StyledModal onClick={closeHandler} >
            <ModalContent onClick={e => {
                // do not close modal if anything inside modal content is clicked
                e.stopPropagation();
            }}>
                <StyledFlex>
                    <CloseBtn onClick={closeHandler}>&times;</CloseBtn>
                </StyledFlex>
                {step === 2 ? <SuccessModalWindow message={message} /> :
                  (mode === 'delete' ?
                  <DeleteModalWindow
                    handleDeleteMovie={handleDeleteMovie}
                  /> :
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
}

export default ModalWindow;
