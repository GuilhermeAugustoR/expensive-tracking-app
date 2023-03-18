import React from "react";
import * as Styled from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <Styled.ContainerHeader>
      <Ionicons
        name="arrow-back"
        size={30}
        color="#fff"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Styled.Title>Voltar</Styled.Title>
    </Styled.ContainerHeader>
  );
};

export default Header;
