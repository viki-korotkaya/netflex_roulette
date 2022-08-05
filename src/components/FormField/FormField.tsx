import React from "react";

import { FormFieldStyled, ErrorSpan, Label, TextArea } from "components/FormField/FromField.styled";

export interface FormFieldProps {
  field: any;
  form: {touched: any, errors: any};
  type: string;
  placeholder: string;
  step?: number
}

const FormField: React.FC<FormFieldProps> = (props) => {
  return (
    <>
      <Label htmlFor={props.field.name}>{props.field.name}</Label>
      {props.type === 'textarea' ?
        <TextArea
          placeholder={props.placeholder}
          {...props.field}
          rows={4}
          cols={50}  /> :
        <FormFieldStyled
          placeholder={props.placeholder}
          type={props.type}
          step={props.step}
          {...props.field}
      />}
      {(props.form.touched[props.field.name] && props.form.errors[props.field.name]) && <ErrorSpan>{props.form.errors[props.field.name]}</ErrorSpan>}
    </>
  );
};

export default FormField;
