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
  const [hide, setHide] = React.useState<boolean>(true);

  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput>
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          secureTextEntry={hide}
          placeholderTextColor="#ffffff61"
        />
        <Icon onPress={() => setHide(!hide)}>
          {hide ? (
            <Ionicons name="eye" size={25} color="#a3a1a4" />
          ) : (
            <Ionicons name="eye-off" size={25} color="#a3a1a4" />
          )}
        </Icon>
      </ContainerInput>
    </Container>
  );
};

export default InputPassword;
