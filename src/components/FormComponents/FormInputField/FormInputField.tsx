import React from "react";

import {
  FormFieldStyled,
  Label,
} from "components/FormComponents/FormInputField/FromInputField.styled";
import ErrorSpan from "components/FormComponents/ErrorSpan/ErrorSpan";

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

  const convertFieldName = (fieldName: string) => {
    return fieldName.replace(/([A-Z])/g, " $1");
  };

  return (
    <>
      <Label htmlFor={field.name}>{convertFieldName(field.name)}</Label>
      <FormFieldStyled
        placeholder={placeholder}
        type={type}
        step={step}
        {...field}
      />
      {touched && error && <ErrorSpan message={error} />}
    </>
  );
};

export default FormInputField;
