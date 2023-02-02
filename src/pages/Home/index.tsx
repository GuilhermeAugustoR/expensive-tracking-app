import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#171626",
      }}
    >
      <View>
        <Text style={{ color: "white" }}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
