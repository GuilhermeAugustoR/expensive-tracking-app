import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AnimatedLottieView from "lottie-react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import * as Styled from "./styles";
import { ExpensiveContext } from "../../context/expensiveContext";
import Divider from "../../components/Divider";

const Login = () => {
  const animation = React.useRef(null);
  const { setLogin } = React.useContext(ExpensiveContext);
  const [user, setUser] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Styled.SafeArea>
      <LinearGradient
        colors={["#100F0F", "#3E065F"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
      >
        <Styled.Container>
          <Styled.ContainerTitle>
            <AnimatedLottieView
              autoPlay
              ref={animation}
              style={{
                width: 280,
                height: 280,
              }}
              source={require("../../../assets/logo.json")}
            />
            <Styled.Title>Expensive Tracking</Styled.Title>
          </Styled.ContainerTitle>

          <Styled.AreaInput>
            <Styled.ContainerInput>
              <Input
                label="Email"
                placeholder="Email"
                value={user}
                onChange={(e) => {
                  setUser(e.nativeEvent.text);
                }}
              />

              <Divider />

              <Styled.ContainerInputPassword>
                <InputPassword
                  label="Senha"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.nativeEvent.text);
                  }}
                />
                <Styled.ButtonForgotPassword>
                  <Styled.TitleForgotPassword>
                    Esqueceu a senha?
                  </Styled.TitleForgotPassword>
                </Styled.ButtonForgotPassword>
              </Styled.ContainerInputPassword>
            </Styled.ContainerInput>

            <Styled.ContainerButton>
              <Button title="Entrar" onPress={() => setLogin(true)} />
            </Styled.ContainerButton>

            <Styled.ContainerSignUp>
              <Styled.TitleSignUp>Não possui uma conta?</Styled.TitleSignUp>
              <Styled.ButtonSignUp>
                <Styled.TextSignUp>Cadastrar</Styled.TextSignUp>
              </Styled.ButtonSignUp>
            </Styled.ContainerSignUp>
          </Styled.AreaInput>
        </Styled.Container>
      </LinearGradient>
    </Styled.SafeArea>
  );
};

export default Login;
