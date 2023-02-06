import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, Inputs, Label } from "./styles";

interface IInput {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder?: string;
  label?: string;
}

const Input = ({ value, onChange, placeholder, label }: IInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Inputs value={value} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
