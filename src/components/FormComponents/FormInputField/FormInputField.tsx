import React from "react";

import {
  FormFieldStyled,
  ErrorSpan,
  Label,
} from "components/FormComponents/FormInputField/FromInputField.styled";

export interface FormInputFieldProps {
  field: any;
  form: { touched: any; errors: any };
  type: string;
  placeholder: string;
  step?: number;
}

const FormInputField: React.FC<FormInputFieldProps> = (props) => {
  const { field, form, type, placeholder, step } = props;
  const error = form.errors[field.name];
  const touched = form.touched[field.name];
  return (
    <>
      <Label htmlFor={field.name}>{field.name}</Label>
      <FormFieldStyled
        placeholder={placeholder}
        type={type}
        step={step}
        {...field}
      />
      {touched && error && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};

export default FormInputField;
