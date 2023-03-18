import styled, { css } from "styled-components/native";

export const Input = styled.TextInput`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 46px;
    border-radius: 8px;
    color: ${theme.colors.textPrimary};
    padding: 10px 10px;
    font-size: 18px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    margin-left: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    color: ${theme.colors.textPrimary};
  `}
`;

export const Container = styled.View`
  display: flex;
`;

export const ContainerInput = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 70%;
    border-radius: 8px;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.primary};
  `}
`;

export const Icon = styled.TouchableOpacity`
  width: 15%;
  justify-content: center;
`;
