import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as Styled from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import HeaderTitle from "../../components/HeaderTitle";
import Divider from "../../components/Divider";
import ButtonTransactions from "../../components/ButtonTransactions";
import Ionicons from "@expo/vector-icons/Ionicons";

const Transactions = () => {
  const navigation: NavigationProp<any> = useNavigation();

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
            <ButtonTransactions
              title={
                <>
                  Receitas{" "}
                  <Ionicons name="arrow-up-outline" size={25} color="white" />
                </>
              }
              onPress={() => navigation.navigate("Income")}
              isColored={true}
            />

            <Divider />

            <ButtonTransactions
              title={
                <>
                  Despesas{" "}
                  <Ionicons name="arrow-down-outline" size={25} color="white" />
                </>
              }
              onPress={() => navigation.navigate("Expense")}
            />
          </Styled.ContainerButton>
        </Styled.Container>
      </LinearGradient>
    </Styled.SafeArea>
  );
};

export default Transactions;
