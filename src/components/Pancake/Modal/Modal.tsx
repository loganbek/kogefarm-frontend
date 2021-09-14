import React from "react";
import styled, { useTheme } from "styled-components";
import Heading from "../Heading/Heading";
import getThemeValue from "../../../utils/getThemeValue";
import {
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalContainer,
  ModalBackButton
} from "./styles";
import { ModalProps } from "./types";

const StyledHeading = styled(Heading)`
  font-weight: 600;
  font-size: 18px;
`;

const Modal: React.FC<ModalProps> = ({
  title,
  onBack,
  children,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "320px",
  ...props
}) => {
  const theme = useTheme();
  return (
    <ModalContainer minWidth={minWidth} {...props}>
      <ModalHeader background={getThemeValue(`colors.${headerBackground}`, headerBackground)(theme)}>
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <StyledHeading>{title}</StyledHeading>
        </ModalTitle>
      </ModalHeader>
      <ModalBody p={bodyPadding}>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
