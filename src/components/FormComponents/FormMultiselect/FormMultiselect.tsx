import React from "react";
import Multiselect from "multiselect-react-dropdown";
import { Label } from "components/FormComponents/FormInputField/FromInputField.styled";
import ErrorSpan from "components/FormComponents/ErrorSpan/ErrorSpan";

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
        />
      </div>
      {error && touched && <ErrorSpan message={error} />}
    </>
  );
};
