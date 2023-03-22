import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default {
  colors: {
    bg: "#100F0F",
    bgCard: "#252525",
    bgCard300: "#3a3a3a",
    primary: "#8E05C2",
    textPrimary: "#ffffff",
    textBlack: "#000",
    textSubtitle: "#BCBCBC",
    bgInput: "#AAB4BE",
    success: "#05c28e",
    error: "#F54336",
  },
  window: {
    width: windowWidth,
    heigth: windowHeight,
  },
};
