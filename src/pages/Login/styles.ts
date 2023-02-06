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
    align-items: center;
    width: ${theme.window.width};
    height: ${theme.window.heigth};
  `}
`;

export const ContainerTitle = styled.View`
  display: flex;
  margin-top: 200px;
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 19%;
  margin-top: 100px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 22px;
    color: ${theme.colors.textColorWhite};
  `}
`;
