import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Title } from "./styles";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#100F0F",
      }}
    >
      <Container>
        <Title>Home</Title>
      </Container>
    </SafeAreaView>
  );
};

export default Home;
