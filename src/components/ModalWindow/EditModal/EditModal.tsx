import React from "react";
import {StyledModal, ModalContent} from "./EditModal.styled";

interface ModalWindowProps {
    open: boolean;
};

const EditModalWindow: React.FC<ModalWindowProps> = (props) => {

    return (
        <StyledModal>
            <ModalContent>

            </ModalContent>
        </StyledModal>
    );
}

export default EditModalWindow;
