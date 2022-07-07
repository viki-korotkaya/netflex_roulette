import React, {SyntheticEvent} from "react";
import {
  TitleModal, BodyModal, DeleteModal, StyledFlex
} from "./DeleteModal.styled";
import {PrimaryButton, SecondaryButton} from "../../Button/Button.styled";

interface ModalWindowProps {
  handleDeleteMovie: (e: SyntheticEvent) => void;
};

const DeleteModalWindow: React.FC<ModalWindowProps> = ({handleDeleteMovie}) => {
  return (
    <DeleteModal>
      <TitleModal>Delete movie</TitleModal>
      <BodyModal>Are your sure you want to delete this movie?</BodyModal>
      <StyledFlex>
        <PrimaryButton onClick={handleDeleteMovie}>Confirm</PrimaryButton>
      </StyledFlex>
    </DeleteModal>
  );
}

export default DeleteModalWindow;
