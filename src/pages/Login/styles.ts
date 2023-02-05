import styled, { css } from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.bg};
  `}
`;
