import React from "react";
import * as Styled from "./styles";

interface IBox {
  title: string;
  price?: string;
  logo?: string;
}

const Box = ({ title, price, logo }: IBox) => {
  return (
    <Styled.Container>
      <Styled.ContainerAvatar>
        <Styled.Avatar>
            <Styled.AvatarBody>🫥</Styled.AvatarBody>
        </Styled.Avatar>
      </Styled.ContainerAvatar>

      <Styled.ContainerTitle>
        <Styled.Title>{title}</Styled.Title>
      </Styled.ContainerTitle>

      <Styled.ContainerPrice>
        <Styled.Price>R$ 20,00</Styled.Price>
      </Styled.ContainerPrice>
    </Styled.Container>
  );
};

export default Box;
