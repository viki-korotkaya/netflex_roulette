import React from "react";
import { ErrorSpanStyled } from "components/FormComponents/ErrorSpan/ErrorSpan.styled";

interface ErrorSpanProps {
  message: string;
}

const ErrorSpan: React.FC<ErrorSpanProps> = ({ message }) => {
  return <ErrorSpanStyled>{message}</ErrorSpanStyled>;
};

export default ErrorSpan;
