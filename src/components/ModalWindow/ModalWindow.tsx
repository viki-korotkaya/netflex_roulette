import React, {SyntheticEvent, useState} from "react";
import {
    StyledModal,
    ModalContent,
    StyledFlex,
    CloseBtn
} from "./ModalWindow.styled";
import {movieList} from "../../assets/data/constData";
import EditModalWindow from "./EditModal/EditModal";
import AddModalWindow from "./AddModal/AddModal";
import DeleteModalWindow from "./DeleteModal/DeleteModal";

interface ModalWindowProps {
    closeHandler: () => void;
    mode: string;
    initialState: {
        id?: string,
        name: string,
        releaseDate: string,
        urlName: string,
        rating: string | number,
        genre: string[],
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
    genre: string[];
    runtime: number;
}

const ModalWindow: React.FC<ModalWindowProps> = ({closeHandler, initialState, mode}) => {
    const [form, setState] = useState({
        title: initialState.name,
        releaseDate: initialState.releaseDate,
        url: initialState.urlName,
        rating: initialState.rating,
        genre: initialState.genre,
        runtime: initialState.runtime,
        overview: initialState.description
    });


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
        closeHandler();
        if (mode === 'edit'){
            editMovie(movie).then((movieList) => console.log(movieList));
        } else {
            addMovie(movie).then((movieList) => console.log(movieList));
        }
    }

    const handleGenreChange = () => {};

    const addMovie = (movie: Movie) => {
        return new Promise((res, rej) => setTimeout(() => {
            movieList.push(movie);
            return res(movieList);
        }, 1000))
    }

    const handleDeleteMovie = () => {
        closeHandler();
        deleteMovie().then((movieList) => console.log(movieList));
    }

    const deleteMovie = () => {
        return new Promise((res, rej) => setTimeout(() => {
            const indexOfMovie = movieList.findIndex(movie => movie.id === initialState.id)
            movieList.splice(indexOfMovie, 1);
            return res(movieList);
        }, 1000))
    }

    const editMovie = (movie: Movie) => {
        return new Promise((res, rej) => setTimeout(() => {
            const indexOfMovie = movieList.findIndex(movie => movie.id === initialState.id)
            movieList[indexOfMovie] = movie;
            return res(movieList);
        }, 1000))
    }

    return (
        <StyledModal>
            <ModalContent>
                <StyledFlex>
                    <CloseBtn onClick={closeHandler}>&times;</CloseBtn>
                </StyledFlex>

                {/*{mode === 'edit' &&*/}
                {/*  <AddModalWindow*/}
                {/*    form={form}*/}
                {/*    handleOnChange={handleOnChange}*/}
                {/*    handleSubmit={handleSubmit}*/}
                {/*    handleFormReset={handleFormReset}*/}
                {/*  />*/}
                {/*}*/}
                {/*{mode === 'add' &&*/}
                {/*  <AddModalWindow*/}
                {/*    form={form}*/}
                {/*    handleOnChange={handleOnChange}*/}
                {/*    handleSubmit={handleSubmit}*/}
                {/*    handleFormReset={handleFormReset}*/}
                {/*  />}*/}
                {mode === 'delete' ?
                  <DeleteModalWindow
                    handleDeleteMovie={handleDeleteMovie}
                  /> :
                    <AddModalWindow
                    form={form}
                    handleOnChange={handleOnChange}
                    handleSubmit={handleSubmit}
                    handleFormReset={handleFormReset}
                    mode={mode}
                    />
                }
            </ModalContent>
        </StyledModal>
    );
}

export default ModalWindow;
