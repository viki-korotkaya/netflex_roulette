import React from "react";
import {
  Label,
  TextArea,
} from "components/FormComponents/FormTextareaField/FormTextareaField.styled";
import ErrorSpan from "components/FormComponents/ErrorSpan/ErrorSpan";

export interface FormTextareaFieldProps {
  field: any;
  form: { touched: any; errors: any };
  placeholder: string;
  rows?: number;
  cols?: number;
}

const FormTextareaField: React.FC<FormTextareaFieldProps> = (props) => {
  const { field, form, placeholder, ...rest } = props;
  const error = form.errors[field.name];
  const touched = form.touched[field.name];
  return (
    <>
      <Label htmlFor={field.name}>{field.name}</Label>
      <TextArea placeholder={placeholder} {...field} {...rest} />
      {touched && error && <ErrorSpan message={error} />}
    </>
  );
};

export default FormTextareaField;
