import React from "react";
import {
  TitleModal,
  BodyModal,
  SuccessModal,
  ImgWrapper,
} from "./SuccessModal.styled";
import Success from "../../../assets/images/success.svg";

interface ModalWindowProps {
  message: string;
}

const SuccessModalWindow: React.FC<ModalWindowProps> = ({ message }) => {
  return (
    <SuccessModal>
      <ImgWrapper>
        <img src={Success} alt="success" />
      </ImgWrapper>
      <TitleModal>Congratulations!</TitleModal>
      <BodyModal>{message}</BodyModal>
    </SuccessModal>
  );
};

export default SuccessModalWindow;
