import styled, { css } from "styled-components/native";

export const Input = styled.TextInput`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 46px;
    /* border: 1px solid ${theme.colors.primary}; */
    border: none;
    border-radius: 8px;
    color: ${theme.colors.textColorBlack};
    /* background: ${theme.colors.bgInput}; */
    padding: 10px 10px;
    font-size: 18px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    width: 68%;
    margin-bottom: 8px;
    font-size: 18px;
    color: ${theme.colors.textColorWhite};
  `}
`;

export const Container = styled.View`
  display: flex;
`;
export const ContainerInput = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 60%;
    border-radius: 8px;
    align-items: center;
    background: ${theme.colors.bgInput};
  `}
`;

export const Icon = styled.TouchableOpacity`
  width: 15%;
  justify-content: center;
  align-items: center;
`;
