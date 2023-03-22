import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../../components/HeaderTitle";
import * as Styled from "./styles";

const AccountStatent = () => {
  return (
    <Styled.SafeArea>
      <LinearGradient
        colors={["#100F0F", "#3E065F"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <Styled.Container>
          <Styled.ContainerHeader>
            <HeaderTitle
              title="Receita"
              subtitle="Aqui você adiciona toda a sua receita mensal para poder ter um controle melhor sobre ele"
            />
          </Styled.ContainerHeader>

          <Styled.ContainerTotalTransactions>
            <Styled.ContainerTotal>
              <Styled.TitleTotal>Total</Styled.TitleTotal>
              <Styled.BodyTotal>R$700,00</Styled.BodyTotal>
            </Styled.ContainerTotal>

            <Styled.SubContainerTotalTransactions>
              <Styled.ContainerIncome>
                <Styled.TitleIncome>Total de Entrada</Styled.TitleIncome>
                <Styled.BodyIncome>R$1000,00</Styled.BodyIncome>
              </Styled.ContainerIncome>

              <Styled.ContainerExpenses>
                <Styled.TitleExpense>Total de Saída</Styled.TitleExpense>
                <Styled.BodyExpense>R$300,00</Styled.BodyExpense>
              </Styled.ContainerExpenses>
            </Styled.SubContainerTotalTransactions>
          </Styled.ContainerTotalTransactions>
        </Styled.Container>
      </LinearGradient>
    </Styled.SafeArea>
  );
};

export default AccountStatent;
