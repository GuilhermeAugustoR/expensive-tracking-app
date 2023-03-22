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
`;

export const ContainerTotalTransactions = styled.View`
  display: flex;
  width: 100%;
  height: 35%;
`;

export const SubContainerTotalTransactions = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  margin-top: 8px;
  justify-content: space-between;
`;

export const ContainerTotal = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    border-width: 2px;
    border-color: ${theme.colors.bgCard300};
    background: ${theme.colors.bgCard};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
  `}
`;

export const TitleTotal = styled.Text`
  display: flex;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const BodyTotal = styled.Text`
  display: flex;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const ContainerExpenses = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 49%;
    height: 100%;
    border-width: 2px;
    border-color: ${theme.colors.bgCard300};
    background: ${theme.colors.bgCard};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
  `}
`;

export const TitleExpense = styled.Text`
  display: flex;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const BodyExpense = styled.Text`
  display: flex;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const ContainerIncome = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 49%;
    height: 100%;
    border-width: 2px;
    border-color: ${theme.colors.bgCard300};
    background: ${theme.colors.bgCard};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
  `}
`;

export const TitleIncome = styled.Text`
  display: flex;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const BodyIncome = styled.Text`
  display: flex;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;
