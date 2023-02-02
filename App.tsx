import { StatusBar } from "react-native";
import React from "react";
import Routes from "./routes";
import { LogBox } from "react-native";
// @ts-ignore
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
