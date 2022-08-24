import React from "react";
import Image from "next/image";
import {
  TitleModal,
  BodyModal,
  SuccessModal,
  ImgWrapper,
} from "components/ModalWindow/SuccessModal/SuccessModal.styled";

interface SuccessModalProps {
  message: string;
}

const SuccessModalWindow: React.FC<SuccessModalProps> = ({ message }) => {
  return (
    <SuccessModal>
      <ImgWrapper>
        <Image src="/images/success.svg" alt="success" width="66" height="66" />
      </ImgWrapper>
      <TitleModal>Congratulations!</TitleModal>
      <BodyModal>{message}</BodyModal>
    </SuccessModal>
  );
};

export default SuccessModalWindow;
