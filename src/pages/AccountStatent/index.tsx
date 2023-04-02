import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList } from "react-native";
import HeaderTitle from "../../components/HeaderTitle";
import Box from "./components/box";
import * as Styled from "./styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "1",
    title: "Third Item",
  },
  {
    id: "2",
    title: "Third Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Third Item",
  },
  {
    id: "5",
    title: "Third Item",
  },
];

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

          <Styled.ContainerExtract>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Box title={item.title} />}
              keyExtractor={(item) => item.id}
            />
          </Styled.ContainerExtract>
        </Styled.Container>
      </LinearGradient>
    </Styled.SafeArea>
  );
};

export default AccountStatent;
