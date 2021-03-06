import React from "react";
import {
  TitleModal,
  BodyModal,
  SuccessModal,
  ImgWrapper,
} from "components/ModalWindow/SuccessModal/SuccessModal.styled";
import Success from "assets/images/success.svg";

interface SuccessModalProps {
  message: string;
}

const SuccessModalWindow: React.FC<SuccessModalProps> = ({ message }) => {
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
