import theme from "../styles";

type Theme = typeof theme.globals;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
