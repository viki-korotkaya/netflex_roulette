import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {
  TitleModal,
  StyledFlex,
  StyledFlexForButtons,
  Left,
  Right,
} from "components/ModalWindow/AddModal/AddModal.styled";
import {
  PrimaryButton,
  SecondaryButton,
} from "components/Button/Button.styled";
import { genreOptions } from "assets/data/constData";
import { Mode, MovieFormProps } from "models/movie";
import FormInputField from "components/FormComponents/FormInputField/FormInputField";
import { FormMultiselect } from "components/FormComponents/FormMultiselect/FormMultiselect";
import FormTextareaField from "components/FormComponents/FormTextareaField/FormTextareaField";
import {
  backgroundGrey,
  backgroundMain,
  baseWeight,
  mainFontColor,
  red,
  xlarge,
} from "styles/global_varables";

interface ModalWindowProps {
  initialValues: MovieFormProps;
  submitHandler: (data: MovieFormProps) => void;
  mode: string;
}

const validationSchema = yup.object({
  title: yup.string().trim().required("Title is a required field"),
  releaseDate: yup.string(),
  movieUrl: yup.string().trim().required("Movie URL is a required field"),
  rating: yup
    .number()
    .typeError("Rating has to be a number")
    .min(0, "Rating has to be greater than or equal to 0")
    .max(10, "Rating has to be less than or equal to 10"),
  genres: yup.array().min(1, "Select at least one genre to proceed"),
  runtime: yup
    .number()
    .typeError("Rating has to be a number")
    .min(1, "Runtime is a required field"),
  overview: yup.string().trim().required("Overview is a required field"),
});

const AddModalWindow: React.FC<ModalWindowProps> = (props) => {
  const { initialValues, submitHandler, mode } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await submitHandler(values);
        resetForm();
      }}
    >
      {(props) => (
        <Form>
          <TitleModal>
            {mode === Mode.Add ? "Add movie" : "Edit movie"}
          </TitleModal>
          <StyledFlex>
            <Left>
              <Field
                component={FormInputField}
                placeholder="Title"
                name="title"
                type="text"
              />
            </Left>
            <Right>
              <Field
                component={FormInputField}
                name="releaseDate"
                type="date"
              />
            </Right>
          </StyledFlex>
          <StyledFlex>
            <Left>
              <Field
                component={FormInputField}
                type="text"
                name="movieUrl"
                placeholder="https://"
              />
            </Left>
            <Right>
              <Field
                component={FormInputField}
                type="number"
                name="rating"
                step="0.1"
              />
            </Right>
          </StyledFlex>
          <StyledFlex>
            <Left>
              <Field
                component={FormMultiselect}
                name="genres"
                displayValue="value"
                selectedValues={props.values.genres}
                hidePlaceholder
                placeholder="Select Genre"
                options={genreOptions}
                showCheckbox
                showArrow={false}
                style={styleForMultiSelect}
              />
            </Left>
            <Right>
              <Field
                component={FormInputField}
                type="number"
                name="runtime"
                placeholder="minutes"
              />
            </Right>
          </StyledFlex>
          <div>
            <Field
              component={FormTextareaField}
              name="overview"
              placeholder="Movie description"
              rows={4}
            />
          </div>
          <StyledFlexForButtons>
            <SecondaryButton type="reset" onClick={() => props.handleReset()}>
              Reset
            </SecondaryButton>
            <PrimaryButton
              disabled={!props.isValid || !props.dirty || props.isSubmitting}
              type="submit"
            >
              Submit
            </PrimaryButton>
          </StyledFlexForButtons>
        </Form>
      )}
    </Formik>
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
