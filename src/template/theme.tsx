import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import theme from "../styles";

type Props = {
  children: ReactNode;
};

export function Theme({ children }: Props) {
  return <ThemeProvider theme={theme.globals}>{children}</ThemeProvider>;
}
