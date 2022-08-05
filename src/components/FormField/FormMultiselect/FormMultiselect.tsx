import Multiselect from "multiselect-react-dropdown";
import {Label, ErrorSpan} from "../FromField.styled";
import React from "react";

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
            form.setTouched({ ...form.touched, [field.name]: true });
          }}
          onSelect={(selectedList: any[]) => {
            form.setFieldValue(field.name, selectedList);
            form.setTouched({ ...form.touched, [field.name]: true });
          }}
          showCheckbox
          showArrow={false}
        />
      </div>
      {error && touched && <ErrorSpan>{error}</ErrorSpan>}
    </>
  );
};
