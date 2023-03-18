import React from "react";
import { Container, ContainerButton, SafeArea } from "./styles";
import Input from "../../components/Input";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import HeaderTitle from "../../components/HeaderTitle";
import { LinearGradient } from "expo-linear-gradient";
import Divider from "../../components/Divider";
import Button from "../../components/Button";

const Expense = () => {
  const navigation = useNavigation();
  const [description, setDescription] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("");

  //Dropdown
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Conta de luz", value: "luz" },
    { label: "Conta de água", value: "agua" },
    { label: "Conta de gás", value: "gas" },
    { label: "Cartão de crédito", value: "cartao" },
    { label: "Carro", value: "carro" },
    { label: "Internet", value: "internet" },
    { label: "Plano de celular", value: "celular" },
  ]);

  return (
    <SafeArea>
      <LinearGradient
        colors={["#100F0F", "#3E065F"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <HeaderTitle
          title="Gastos"
          subtitle="Aqui você adiciona todo o seu gasto mensal para poder ter um controle melhor sobre ele"
        />
        <Container>
          <DropDownPicker
            placeholder="Qual o tipo do produto"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            theme="DARK"
            textStyle={{ fontSize: 17 }}
            dropDownContainerStyle={{ backgroundColor: "#1a1717" }}
            placeholderStyle={{
              color: "#ffffff61",
            }}
            style={{
              alignSelf: "center",
              width: "98%",
              borderBottomWidth: 2,
              borderWidth: 0,
              borderBottomColor: "#8E05C2",
              backgroundColor: "transparent",
              borderRadius: 0,
            }}
          />

          <Divider />

          <Input
            isComplete
            label="Descrição"
            placeholder="Coloque a descrição do produto"
            value={description}
            onChange={(e) => {
              setDescription(e.nativeEvent.text);
            }}
          />

          <Divider />

          <Input
            isComplete
            label="Valor"
            placeholder="Digite o valor do produto"
            value={amount}
            onChange={(e) => {
              setAmount(e.nativeEvent.text);
            }}
          />

          <Divider />
          <ContainerButton>
            <Button title="Adicionar" onPress={() => {}} />
          </ContainerButton>
        </Container>
      </LinearGradient>
    </SafeArea>
  );
};

export default Expense;
