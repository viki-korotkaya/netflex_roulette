import React from "react";
import {
  ErrorSpan,
  Label,
  TextArea,
} from "components/FormComponents/FormTextareaField/FormTextareaField.styled";

export interface FormTextareaFieldProps {
  field: any;
  form: { touched: any; errors: any };
  placeholder: string;
  step?: number;
}

const FormTextareaField: React.FC<FormTextareaFieldProps> = (props) => {
  const { field, form, placeholder } = props;
  const error = form.errors[field.name];
  const touched = form.touched[field.name];
  return (
    <>
      <Label htmlFor={field.name}>{field.name}</Label>
      <TextArea placeholder={placeholder} {...field} rows={4} cols={50} />
      {touched && error && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};

export default FormTextareaField;
