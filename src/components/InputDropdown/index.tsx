import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface IInput {
  open: boolean;
  value: any;
  setValue: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputDropdown = ({ open, value, setValue, setOpen }: IInput) => {
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
    <>
      <DropDownPicker
        placeholder="Qual o tipo do produto"
        modalTitle="Tipo da despesa"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        listMode="MODAL"
        modalProps={{
          animationType: "slide",
        }}
        textStyle={{ fontSize: 18 }}
        modalTitleStyle={{
          display: "flex",
          alignSelf: "center",
          fontWeight: "700",
        }}
        // dropDownContainerStyle={{ backgroundColor: "#1a171a" }}
        modalContentContainerStyle={{ backgroundColor: "#1a171a" }}
        customItemContainerStyle={{ padding: 20 }}
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
    </>
  );
};

export default InputDropdown;
