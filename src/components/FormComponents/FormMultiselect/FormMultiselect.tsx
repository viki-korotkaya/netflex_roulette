import Multiselect from "multiselect-react-dropdown";
import { Label, ErrorSpan } from "../FormInputField/FromInputField.styled";
import React from "react";
import {
  backgroundGrey,
  backgroundMain,
  baseWeight,
  mainFontColor,
  red,
  xlarge,
} from "styles/global_varables";

export const FormMultiselect = (props: any) => {
  const { field, form, ...rest } = props;
  const error = form.errors[field.name];
  const touched = form.touched[field.name];
  return (
    <>
      <Label htmlFor={field.name}>{field.name}</Label>
      <div
        onBlur={() => {
          form.setTouched({ ...form.touched, [field.name]: true });
        }}
      >
        <Multiselect
          {...field}
          {...rest}
          onRemove={(selectedList: any[]) => {
            form.setFieldValue(field.name, selectedList);
          }}
          onSelect={(selectedList: any[]) => {
            form.setFieldValue(field.name, selectedList);
          }}
          showCheckbox
          showArrow={false}
          style={styleForMultiSelect}
        />
      </div>
      {error && touched && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};

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
