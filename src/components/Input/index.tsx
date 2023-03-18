import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, Inputs, Label } from "./styles";

interface IInput {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder?: string;
  label?: string;
  isComplete?: boolean | any;
}

const Input = ({ value, onChange, placeholder, label, isComplete }: IInput) => {
  return (
    <Container isComplete={isComplete}>
      <Label>{label}</Label>
      <Inputs
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        placeholderTextColor="#ffffff61"
      />
    </Container>
  );
};

export default Input;
