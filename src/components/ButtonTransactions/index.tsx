import React from "react";
import { GestureResponderEvent } from "react-native";
import * as Styled from "./styles";

interface IButtonTransactions {
  title: any;
  onPress: (event: GestureResponderEvent) => void;
  isColored?: boolean | any;
}

const ButtonTransactions = ({
  title,
  onPress,
  isColored,
}: IButtonTransactions) => {
  return (
    <Styled.ContainerButtonTransactions onPress={onPress}>
      <Styled.StyledButtonTransactions isColored={isColored}>
        <Styled.TextButtonTransactions>{title}</Styled.TextButtonTransactions>
      </Styled.StyledButtonTransactions>
    </Styled.ContainerButtonTransactions>
  );
};

export default ButtonTransactions;
