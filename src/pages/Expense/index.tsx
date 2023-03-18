import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Title } from "./styles";
import Input from "../../components/Input";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import HeaderTitle from "../../components/HeaderTitle";

const Expense = () => {
  const navigation = useNavigation();
  const [description, setDescription] = React.useState<string>("");

  //Dropdown
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#100F0F",
      }}
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
        />

        <Input
          label="Descrição"
          placeholder="Coloque a descrição do produto"
          value={description}
          onChange={(e) => {
            setDescription(e.nativeEvent.text);
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Expense;
