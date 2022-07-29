import React, { SyntheticEvent } from "react";
import {
  Form,
  TitleModal,
  InputDate,
  InputLeft,
  InputRight,
  Label,
  StyledFlex,
  StyledFlexForButtons,
  TextArea,
} from "components/ModalWindow/AddModal/AddModal.styled";
import { PrimaryButton, SecondaryButton } from "components/Button/Button.styled";
import { genreOptions } from "assets/data/constData";
import {
  backgroundGrey,
  backgroundMain,
  baseWeight,
  mainFontColor,
  xlarge,
  red,
} from "styles/global_varables";
import { Multiselect } from "multiselect-react-dropdown";
import { MovieFormProps } from "models/movie";

interface ModalWindowProps {
  form: MovieFormProps;
  handleOnChange: (e: SyntheticEvent) => void;
  handleSubmit: (e: SyntheticEvent) => void;
  handleFormReset: (e: SyntheticEvent) => void;
  handleGenreChange: (selectedList: [], selectedItem: {}) => void;
  mode: string;
}

const AddModalWindow: React.FC<ModalWindowProps> = (props) => {
  const {
    form,
    handleOnChange,
    handleSubmit,
    handleFormReset,
    handleGenreChange,
    mode,
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <TitleModal>{mode === "add" ? "Add movie" : "Edit movie"}</TitleModal>
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
          <InputDate
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
          <Label htmlFor="movieUrl">Models URL</Label>
          <InputLeft
            type="text"
            name="movieUrl"
            id="movieUrl"
            placeholder="https://"
            value={form.movieUrl}
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
          <Label htmlFor="genres">Genre</Label>
          <Multiselect
            displayValue="value"
            selectedValues={form.genres}
            hidePlaceholder={true}
            placeholder="Select Genre"
            onRemove={handleGenreChange}
            onSelect={handleGenreChange}
            options={genreOptions}
            showCheckbox
            showArrow={false}
            style={styleForMultiSelect}
          />
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
          placeholder="Models description"
          value={form.overview}
          onChange={handleOnChange}
        />
      </div>
      <StyledFlexForButtons>
        <SecondaryButton onClick={handleFormReset}>Reset</SecondaryButton>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </StyledFlexForButtons>
    </Form>
  );
};

export default AddModalWindow;

const styleForMultiSelect = {
  searchBox: {
    display: "flex",
    width: "525px",
    height: "56.5px",
    paddingLeft: "17px",
    paddingRight: "17px",
    borderRadius: 0,
    background: `${backgroundGrey}`,
    border: 0,
    color: `${mainFontColor}`,
    fontWeight: `${baseWeight}`,
    fontSize: `${xlarge}`,
    backgroundImage: `linear-gradient(45deg, transparent 50%, ${red} 50%), linear-gradient(135deg, ${red} 50%, transparent 50%)`,
    backgroundPosition: `calc(100% - 20px) calc(1em + 2px),
              calc(100% - 15px) calc(1em + 2px),
              calc(100% - .5em) .5em`,
    backgroundSize: `5px 5px,
              5px 5px,
              1.5em 1.5em`,
    backgroundRepeat: "no-repeat",
  },
  optionContainer: {
    color: `${mainFontColor}`,
    background: `${backgroundMain}`,
    border: 0,
  },
  chips: {
    background: `${red}`,
    alignSelf: "center",
  },
  option: {
    background: `${backgroundMain}`,
  },
  checkbox: { accentColor: `${red} !import` },
};
