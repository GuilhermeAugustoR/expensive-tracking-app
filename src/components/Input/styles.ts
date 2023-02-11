import styled, { css } from "styled-components/native";

export const Inputs = styled.TextInput`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 46px;
    /* border: 1px solid ${theme.colors.primary}; */
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.primary};
    border-radius: 8px;
    color: ${theme.colors.textColorWhite};
    padding: 10px 10px;
    font-size: 18px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    margin-left: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    color: ${theme.colors.textColorWhite};
  `}
`;

export const Container = styled.View`
  display: flex;
  width: 80%;
`;
