import React from "react";
import * as Styled from "./styles";

interface IHeaderTitle {
  title: string;
  subtitle?: string;
}

const HeaderTitle = ({ title, subtitle }: IHeaderTitle) => {
  return (
    <Styled.ContainerHeaderTitle>
      <Styled.Title>{title}</Styled.Title>

      <Styled.ContainerHeaderSubTitle>
        <Styled.SubTitle>{subtitle}</Styled.SubTitle>
      </Styled.ContainerHeaderSubTitle>
    </Styled.ContainerHeaderTitle>
  );
};

export default HeaderTitle;
