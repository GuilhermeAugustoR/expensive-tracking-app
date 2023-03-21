import styled, { css } from "styled-components/native";

interface IButtonTransactions {
  isColored: boolean;
}

export const ContainerButtonTransactions = styled.TouchableOpacity`
  display: flex;
  width: 300px;
`;

export const StyledButtonTransactions = styled.View`
  ${({ theme }) => css`
    background: transparent;
    align-self: center;
    justify-content: center;
    border-radius: 12%;
    height: 70px;
    width: 76%;
    border: 1px solid
      ${(props: IButtonTransactions) =>
        props.isColored ? `${theme.colors.success}` : `${theme.colors.error}`};
    :disabled {
      background-color: #747e85;
    }
  `}
`;

export const TextButtonTransactions = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    align-self: center;
    color: ${theme.colors.textPrimary};
  `}
`;
