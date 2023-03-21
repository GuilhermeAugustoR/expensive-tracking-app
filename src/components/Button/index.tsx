import React from "react";
import { GestureResponderEvent } from "react-native";
import { ContainerButton, StyledButton, TextButton } from "./styles";

interface IButton {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isColorAdd?: boolean;
  isLogin?: boolean;
}

const Button = ({ title, onPress, isColorAdd, isLogin }: IButton) => {
  return (
    <ContainerButton onPress={onPress}>
      <StyledButton isAdd={isColorAdd} isLogin={isLogin}>
        <TextButton>{title}</TextButton>
      </StyledButton>
    </ContainerButton>
  );
};

export default Button;
