import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background: ${theme.colors.bgCard};
    margin-top: 20px;
    align-items: center;
    border-radius: 8px;
  `}
`;

export const ContainerTitle = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 58%;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    display: flex;
    font-size: 20px;
    color: ${theme.colors.textPrimary};
    padding-left: 30px;
  `}
`;

export const ContainerAvatar = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 15%;
  `}
`;

export const Avatar = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
  `}
`;

export const AvatarBody = styled.Text`
  ${({ theme }) => css`
    display: flex;
    font-size: 40px;
    
  `}
`;

export const ContainerPrice = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 30%;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    display: flex;
    font-size: 20px;
    color: ${theme.colors.success};
  `}
`;
