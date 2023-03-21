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

export const ContainerHeader = styled.View`
  display: flex;
  margin-top: 10px;
`;

export const ContainerButton = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36%;
`;
