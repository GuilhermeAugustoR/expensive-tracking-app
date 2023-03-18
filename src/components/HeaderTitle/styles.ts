import styled, { css } from "styled-components/native";

export const ContainerHeaderTitle = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.window.width};
    justify-content: center;
    margin-left: 10px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: 25px;
    margin-bottom: 8px;
  `}
`;

export const ContainerHeaderSubTitle = styled.View`
  display: flex;
  width: 95%;
  margin-bottom: 20px;
  justify-content: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.textSubtitle};
    font-size: 15px;
  `}
`;
