import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, Inputs, Label } from "./styles";

interface IInput {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder?: string;
  label?: string;
  isComplete?: boolean | any;
  keyboardType?: string | any;
}

const Input = ({
  value,
  onChange,
  placeholder,
  label,
  isComplete,
  keyboardType,
}: IInput) => {
  return (
    <Container isComplete={isComplete}>
      <Label>{label}</Label>
      <Inputs
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        placeholderTextColor="#ffffff61"
        keyboardType={keyboardType ? keyboardType : "default"}
      />
    </Container>
  );
};

export default Input;
