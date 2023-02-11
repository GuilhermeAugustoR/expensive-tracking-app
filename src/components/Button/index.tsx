import React from "react";
import { ContainerButton, StyledButton, TextButton } from "./styles";

interface IButton {
  title: string;
}

const Button = ({ title }: IButton) => {
  return (
    <ContainerButton>
      <StyledButton>
        <TextButton>{title}</TextButton>
      </StyledButton>
    </ContainerButton>
  );
};

export default Button;
