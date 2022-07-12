import React, {SyntheticEvent, useState} from "react";
import {
  Form,
  TitleModal,
  InputDate,
  InputLeft,
  InputRight,
  Label,
  Select,
  StyledFlex,
  StyledFlexForButtons,
  TextArea, SelectBox, OverSelect, CheckBoxes, CheckboxesWrapper, SelectWrapper
} from "./AddModal.styled";
import {PrimaryButton, SecondaryButton} from "../../Button/Button.styled";
import {default as ReactSelect, MultiValue} from "react-select";
import { ActionMeta, components } from "react-select";
import {genreOptions} from "../../../assets/data/constData";
import Option from './Option/Option';
import {backgroundGrey} from "../../../styles/global_varables";

interface ModalWindowProps {
  form: {
    title: string,
    releaseDate: string,
    url: string,
    rating: string | number,
    genre: string[],
    runtime: string | number,
    overview: string
  };
  handleOnChange: (e: SyntheticEvent) => void;
  handleSubmit: (e: SyntheticEvent) => void;
  handleFormReset: (e: SyntheticEvent) => void;
  // handleGenreChange: ((newValue: MultiValue<unknown>, actionMeta: ActionMeta<unknown>) => void) | undefined;
  mode: string;
};

interface Option {
  value: string, label: string
}

const AddModalWindow: React.FC<ModalWindowProps> = (props) => {
  const {form, handleOnChange, handleSubmit, handleFormReset, mode} = props;
  const [openCheckboxes, setOpenCheckboxes] = useState(false);

  const onChangeCheckbox = () => {

  }

  const showCheckboxes = () => {
    setOpenCheckboxes(!openCheckboxes);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TitleModal>{mode === 'add' ? 'Add movie' : 'Edit movie'}</TitleModal>
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
            type="text"
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
          {/*<ReactSelect*/}
          {/*  options={genreOptions}*/}
          {/*  isMulti*/}
          {/*  closeMenuOnSelect={false}*/}
          {/*  hideSelectedOptions={false}*/}
          {/*  onChange={handleGenreChange}*/}
          {/*  components={{Option}}*/}
          {/*  theme={(theme) => ({*/}
          {/*    ...theme,*/}
          {/*    borderRadius: 0,*/}
          {/*    background: '#323232',*/}
          {/*    colors: {*/}
          {/*      ...theme.colors,*/}
          {/*      primary25: 'hotpink',*/}
          {/*      primary: 'black',*/}
          {/*    },*/}
          {/*  })}*/}
          {/*/>*/}
          <SelectBox onClick={showCheckboxes}>
            {/*<Label htmlFor="genre">Genre</Label>*/}
            {/*<Select id="genre" name="genre" multiple value={form.genre} onChange={handleOnChange}>*/}
            {/*  <option value="default" disabled>Select genre</option>*/}
            {/*  <option value="documentary">Documentary</option>*/}
            {/*  <option value="horror">Horror</option>*/}
            {/*  <option value="crime">Crime</option>*/}
            {/*  <option value="comedy">Comedy</option>*/}
            {/*</Select>*/}

            <Select>
              <option>Select genre</option>
            </Select>
            <OverSelect></OverSelect>
          </SelectBox>

          <CheckboxesWrapper>
            {openCheckboxes && <CheckBoxes>
              <label htmlFor="crime">
                <input type="checkbox" id="crime" onChange={onChangeCheckbox}/>
                Crime
              </label>

              <label htmlFor="documentary">
                <input type="checkbox" id="documentary"/>
                Documentary
              </label>
              <label htmlFor="horror">
                <input type="checkbox" id="horror"/>
                Horror
              </label>
              <label htmlFor="comedy">
                <input type="checkbox" id="comedy"/>
                Comedy
              </label>
            </CheckBoxes>}
          </CheckboxesWrapper>
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
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </StyledFlexForButtons>
    </Form>
  );
}

export default AddModalWindow;
