import React from "react";
import { GestureResponderEvent } from "react-native";
import { ContainerButton, StyledButton, TextButton } from "./styles";

interface IButton {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Button = ({ title, onPress }: IButton) => {
  return (
    <ContainerButton onPress={onPress}>
      <StyledButton>
        <TextButton>{title}</TextButton>
      </StyledButton>
    </ContainerButton>
  );
};

export default Button;
