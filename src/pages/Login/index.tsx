import React from "react";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import * as Styled from "./styles";

const Login = () => {
  const [user, setUser] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Styled.SafeArea>
      <Styled.Container>
        <Styled.ContainerTitle>
          <Styled.Title>Expensive Tracking</Styled.Title>
        </Styled.ContainerTitle>

        <Styled.ContainerInput>
          <Input
            label="Email"
            placeholder="Email"
            value={user}
            onChange={(e) => {
              setUser(e.nativeEvent.text);
            }}
          />

          <InputPassword
            label="Senha"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.nativeEvent.text);
            }}
          />
        </Styled.ContainerInput>
      </Styled.Container>
    </Styled.SafeArea>
  );
};

export default Login;
