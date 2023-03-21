import styled, { css } from "styled-components/native";

export const ContainerHeader = styled.View`
${({theme})=> css`
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 5%;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.bgInput};
`}
`;

export const Title = styled.Text`
  color: white;
  font-size: 20rem;
`;
