import styled, { css } from "styled-components/native";

interface IButton {
  isAdd?: boolean;
  isLogin?: any;
}

export const ContainerButton = styled.TouchableOpacity`
  display: flex;
  width: 300px;
`;

export const StyledButton = styled.View`
  ${({ theme }) => css`
    background: ${(props: IButton) =>
      props.isLogin
        ? `${theme.colors.primary}`
        : props.isAdd
        ? `${theme.colors.success}`
        : `${theme.colors.error}`};
    align-self: center;
    justify-content: center;
    border-radius: 12%;
    height: 55px;
    width: 70%;
    :disabled {
      background-color: #747e85;
    }
  `}
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 700;
    align-self: center;
    color: ${theme.colors.textPrimary};
  `}
`;
