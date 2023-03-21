import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Styled from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import HeaderTitle from "../../components/HeaderTitle";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import ButtonTransactions from "../../components/ButtonTransactions";

const Transactions = () => {
  return (
    <Styled.SafeArea>
      <LinearGradient
        colors={["#100F0F", "#3E065F"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <Styled.Container>
          <HeaderTitle
            title="Transações"
            subtitle="Escolha aqui o tipo da transação que deseja fazer"
          />

          <Styled.ContainerButton>
            <ButtonTransactions title="Receita" onPress={() => {}} isColored={true}/>

            <Divider />

            <ButtonTransactions title="Despesas" onPress={() => {}} />
          </Styled.ContainerButton>
        </Styled.Container>
      </LinearGradient>
    </Styled.SafeArea>
  );
};

export default Transactions;
