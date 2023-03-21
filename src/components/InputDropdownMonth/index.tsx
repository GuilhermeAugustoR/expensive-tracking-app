import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface IInput {
  open: boolean;
  value: any;
  setValue: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputDropdownMonth = ({ open, value, setValue, setOpen }: IInput) => {
  const [items, setItems] = React.useState([
    { label: "Janeiro", value: "janeiro" },
    { label: "Fevereiro", value: "fevereiro" },
    { label: "Março", value: "marco" },
    { label: "Abril", value: "abril" },
    { label: "Maio", value: "maio" },
    { label: "Junho", value: "junho" },
    { label: "Julho", value: "julho" },
    { label: "Agosto", value: "agosto" },
    { label: "Setembro", value: "setembro" },
    { label: "Outubro", value: "outubro" },
    { label: "Novembro", value: "novembro" },
    { label: "Desembro", value: "desembro" },
  ]);
  return (
    <>
      <DropDownPicker
        placeholder="Qual o mês"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        listMode="FLATLIST"
        textStyle={{ fontSize: 18 }}
        dropDownContainerStyle={{ backgroundColor: "#1a171a" }}
        placeholderStyle={{
          color: "#ffffff61",
        }}
        listItemContainerStyle={{ paddingTop: 10 }}
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

export default InputDropdownMonth;
