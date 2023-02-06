import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import React from "react";
import { Container, Icon, Label, Input, ContainerInput } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IInput {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder?: string;
  label?: string;
}

const InputPassword = ({ value, onChange, placeholder, label }: IInput) => {
  const [hide, setHide] = React.useState<boolean>(false);

  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput>
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          secureTextEntry={hide}
        />
        <Icon onPress={() => setHide(!hide)}>
          {hide ? (
            <Ionicons name="eye" size={25} color="#FFF" />
          ) : (
            <Ionicons name="eye-off" size={25} color="#FFF" />
          )}
        </Icon>
      </ContainerInput>
    </Container>
  );
};

export default InputPassword;
