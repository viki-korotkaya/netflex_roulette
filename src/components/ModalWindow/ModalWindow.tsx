import React, {SyntheticEvent, useState} from "react";
import {
    StyledModal,
    ModalContent,
    StyledFlex,
    CloseBtn,
    TitleModal,
    Form,
    Label,
    InputLeft,
    InputRight, Select, TextArea, StyledFlexForButtons
} from "./OpenModal.styled";
import {PrimaryButton, SecondaryButton} from "../Button/Button.styled";
import {movieList} from "../../assets/data/constData";

interface ModalWindowProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type Movie = {
    id: string;
    name: string;
    urlName: string;
    releaseDate: number;
    description: string;
}

const ModalWindow: React.FC<ModalWindowProps> = (props) => {
    const [form, setState] = useState({
        title: '',
        releaseDate: '',
        url: '',
        rating: '',
        genre: 'default',
        runtime: '',
        overview: ''
    });


    const handleFormReset = (e: SyntheticEvent) => {
        let newForm = {...form};
        newForm.title = '';
        newForm.releaseDate = '';
        newForm.url = '';
        newForm.rating = '';
        newForm.genre = 'default';
        newForm.runtime = '';
        newForm.overview = '';
        setState(newForm);
        e.preventDefault();
    }

    const handleOnChange = (e: SyntheticEvent) => {
        let target = e.target as HTMLFormElement;
        setState({...form, [target.name]: target.value});
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        let newMovie = {} as Movie;
        newMovie.id = (movieList.length + 1).toString();
        newMovie.name = form.title;
        newMovie.urlName = form.url;
        newMovie.releaseDate = +form.releaseDate;
        newMovie.description = form.overview;
    }

    return (
        <StyledModal>
            <ModalContent>
                <StyledFlex>
                    <CloseBtn onClick={props.onClick}>&times;</CloseBtn>
                </StyledFlex>
                <TitleModal>Add Movie</TitleModal>
                <Form onSubmit={handleSubmit}>
                    <StyledFlex>
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <InputLeft
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                value={form.title}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="releaseDate">Release Date</Label>
                            <InputRight
                                type="date"
                                name="releaseDate"
                                id="releaseDate"
                                value={form.releaseDate}
                                onChange={handleOnChange}
                            />
                        </div>
                    </StyledFlex>
                    <StyledFlex>
                        <div>
                            <Label htmlFor="url">Movie URL</Label>
                            <InputLeft
                                type="text"
                                name="url"
                                id="url"
                                placeholder="https://"
                                value={form.url}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="rating">Rating</Label>
                            <InputRight
                                type="number"
                                name="rating"
                                id="rating"
                                min="0"
                                max="10"
                                step="0.1"
                                value={form.rating}
                                onChange={handleOnChange}
                            />
                        </div>
                    </StyledFlex>
                    <StyledFlex>
                        <div>
                            <Label htmlFor="genre">Genre</Label>
                            <Select id="genre" name="genre" value={form.genre} onChange={handleOnChange}>
                                <option value="default" disabled>Select genre</option>
                                <option value="documentary">Documentary</option>
                                <option value="horror">Horror</option>
                                <option value="crime">Crime</option>
                                <option value="comedy">Comedy</option>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="runtime">Runtime</Label>
                            <InputRight
                                type="number"
                                name="runtime"
                                id="runtime"
                                placeholder="minutes"
                                value={form.runtime}
                                onChange={handleOnChange}
                            />
                        </div>
                    </StyledFlex>
                    <div>
                        <Label htmlFor="overview">Overview</Label>
                        <TextArea
                            id="overview"
                            name="overview"
                            rows={4}
                            cols={50}
                            placeholder="Movie description"
                            value={form.overview}
                            onChange={handleOnChange}
                        />
                    </div>
                    <StyledFlexForButtons>
                        <SecondaryButton onClick={handleFormReset}>Reset</SecondaryButton>
                        <PrimaryButton>Submit</PrimaryButton>
                    </StyledFlexForButtons>
                </Form>
            </ModalContent>
        </StyledModal>
    );
}

export default ModalWindow;
