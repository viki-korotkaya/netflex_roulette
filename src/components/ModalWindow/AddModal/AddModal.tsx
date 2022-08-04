import React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import * as yup from 'yup';
import {
  TitleModal,
  InputDate,
  InputLeft,
  InputRight,
  Label,
  StyledFlex,
  StyledFlexForButtons,
  TextArea,
  ErrorSpan,
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
import {Mode, MovieFormProps} from "models/movie";

interface ModalWindowProps {
  initialValues: MovieFormProps;
  submitHandler: (data: MovieFormProps ) => void;
  mode: string
}

const validationSchema = yup.object({
  title: yup.string()
    .trim()
    .required('Title is a required field'),
  releaseDate: yup.string(),
  movieUrl: yup.string()
    .trim()
    .required('Movie URL is a required field'),
  rating: yup.number().typeError('Rating has to be a number')
    .min(0, 'Rating has to be greater than or equal to 0')
    .max(10, 'Rating has to be less than or equal to 10'),
  genres: yup.array().min(1, 'Select at least one genre to proceed'),
  runtime: yup.number().typeError('Rating has to be a number')
    .min(1, 'Runtime is a required field'),
  overview: yup.string()
    .trim()
    .required('Overview is a required field'),
})

const AddModalWindow: React.FC<ModalWindowProps> = (props) => {
  const {
    initialValues,
    submitHandler,
    mode
  } = props;

  return (
   <Formik
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={(values) => submitHandler(values)}
   >
     {(props) => (
       <Form>
         <TitleModal>{mode === Mode.Add ? "Add movie" : "Edit movie"}</TitleModal>
         <StyledFlex>
           <div>
             <Label htmlFor="title">Title</Label>
             <InputLeft
               placeholder="Title"
               name="title"
               type="text"
             />
             {(props.errors.title && props.touched.title) && <ErrorSpan>{props.errors.title}</ErrorSpan>}
           </div>
           <div>
             <Label htmlFor="releaseDate">Release Date</Label>
             <InputDate
               type="date"
               name="releaseDate"
             />
           </div>
         </StyledFlex>
         <StyledFlex>
           <div>
             <Label htmlFor="movieUrl">Models URL</Label>
             <InputLeft
               type="text"
               name="movieUrl"
               placeholder="https://"
             />
             {(props.errors.movieUrl && props.touched.movieUrl) && <ErrorSpan>{props.errors.movieUrl}</ErrorSpan>}
           </div>
           <div>
             <Label htmlFor="rating">Rating</Label>
             <InputRight
               type="number"
               name="rating"
               min="0"
               max="10"
               step="0.1"
             />
             {(props.errors.rating && props.touched.rating) && <ErrorSpan>{props.errors.rating}</ErrorSpan>}
           </div>
         </StyledFlex>
         <StyledFlex>
           <div>
             <Label htmlFor="genres">Genre</Label>
             <Field name="genres">
               {({
                   field,
                   form,
                   meta,
                 }: FieldProps<{}>) => (
                   <>
                 <Multiselect
                   {...field}
                   id="genres"
                   displayValue="value"
                   selectedValues={props.values.genres}
                   hidePlaceholder={true}
                   placeholder="Select Genre"
                   onRemove={(selectedList: any[]) => {
                     props.setFieldValue(field.name, selectedList);
                     // props.setTouched({...form.touched,[field.name]: true });
                   }}
                   onSelect={(selectedList: any[]) => {
                     props.setFieldValue(field.name, selectedList);
                     // props.setTouched({...form.touched,[field.name]: true });
                   }}
                   options={genreOptions}
                   showCheckbox
                   showArrow={false}
                   style={styleForMultiSelect}
                 />
                     {meta.error && meta.touched && (
                       <ErrorSpan>{meta.error}</ErrorSpan>
                     )}
                 </>
               )}
             </Field>
             {/*{(props.errors.genres && props.touched.genres) && <ErrorSpan>{props.errors.genres as string}</ErrorSpan>}*/}
           </div>
           <div>
             <Label htmlFor="runtime">Runtime</Label>
             <InputRight
               type="number"
               name="runtime"
               placeholder="minutes"
             />
             {(props.errors.runtime && props.touched.runtime) && <ErrorSpan>{props.errors.runtime}</ErrorSpan>}
           </div>
         </StyledFlex>
         <div>
           <Label htmlFor="overview">Overview</Label>
           <TextArea
             component="textarea"
             name="overview"
             placeholder="Movie description"
             rows={4}
             cols={50}
           />
           { (props.errors.overview && props.touched.overview) && <ErrorSpan>{props.errors.overview}</ErrorSpan>}
         </div>
         <StyledFlexForButtons>
           <SecondaryButton type="reset" onClick={() => props.handleReset()}>Reset</SecondaryButton>
           <PrimaryButton disabled={ !props.isValid || !props.dirty || props.isSubmitting} type="submit">Submit</PrimaryButton>
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
