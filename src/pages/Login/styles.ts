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
`;

export const AreaInput = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  margin-top: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 22px;
    color: ${theme.colors.textPrimary};
    text-align: center;
  `}
`;

export const ContainerInputPassword = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ButtonForgotPassword = styled.TouchableOpacity`
  display: flex;
  width: 77%;
`;

export const TitleForgotPassword = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.textPrimary};
    text-decoration-line: underline;
    margin-top: 20px;
  `}
`;

export const ContainerButton = styled.View`
  display: flex;
  height: 15%;
  justify-content: center;
`;

export const ContainerSignUp = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 75%;
  margin-top: 40px;
`;

export const TitleSignUp = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.textPrimary};
    opacity: 0.7;
    margin-bottom: 10px;
  `}
`;

export const ButtonSignUp = styled.TouchableOpacity`
  display: flex;
`;

export const TextSignUp = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.textPrimary};
    text-decoration-line: underline;
  `}
`;
