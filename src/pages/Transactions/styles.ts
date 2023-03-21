import styled, { css } from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.bg};
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 95%;
    height: ${theme.window.heigth};
    align-self: center;
    margin-top: 20px;
  `}
`;

export const ContainerButton = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 160px;
`;
