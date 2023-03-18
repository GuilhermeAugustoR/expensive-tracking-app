import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default {
  colors: {
    bg: "#100F0F",
    primary: "#8E05C2",
    textPrimary: "#ffffff",
    textBlack: "#000",
    textSubtitle: "#BCBCBC",
    bgInput: "#AAB4BE",
  },
  window: {
    width: windowWidth,
    heigth: windowHeight,
  },
};
