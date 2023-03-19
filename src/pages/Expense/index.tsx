import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Container, ContainerButton, SafeArea } from "./styles";
import Input from "../../components/Input";
import HeaderTitle from "../../components/HeaderTitle";
import Divider from "../../components/Divider";
import Button from "../../components/Button";
import InputDropdown from "../../components/InputDropdown";

const Expense = () => {
  const navigation = useNavigation();
  const [description, setDescription] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("");

  //Dropdown
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  function Formatar(valor: any) {
    const v = ((valor.replace(/\D/g, "") / 100).toFixed(2) + "").split(".");

    const m: any = v[0]
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g);

    for (let i = 0; i < m.length; i++)
      m[i] = m[i].split("").reverse().join("") + ".";

    const r = m.reverse().join("");

    return "R$ " + r.substring(0, r.lastIndexOf(".")) + "," + v[1];
  }

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            <InputDropdown
              open={open}
              value={value}
              setOpen={setOpen}
              setValue={setValue}
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
              keyboardType="numeric"
              value={Formatar(amount)}
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
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default Expense;
