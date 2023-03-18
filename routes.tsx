import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import { ExpensiveContext } from "./src/context/expensiveContext";
import Expense from "./src/pages/Expense";
import AccountStatent from "./src/pages/AccountStatent";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StacksDashboard() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
function StacksLogin() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function StacksExpense() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Expense" component={Expense} />
    </Stack.Navigator>
  );
}

function StacksAccountStatent() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountStatent" component={AccountStatent} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  const { login } = React.useContext(ExpensiveContext);

  return (
    <>
      {login ? (
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#5eead4",
            tabBarInactiveTintColor: "#e6e6e6",
            headerShown: false,
            tabBarItemStyle: {
              paddingTop: 10,
              height: 60,
            },

            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#1e1e1e",
              borderTopWidth: 0,
              bottom: 15,
              left: 14,
              right: 14,
              elevation: 0,
              borderRadius: 30,
              height: 70,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={StacksDashboard}
            options={{
              tabBarIcon: ({ color, focused }) => {
                if (focused) {
                  return <Ionicons name="home" size={25} color={color} />;
                }

                return <Ionicons name="home" size={25} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="Expense"
            component={StacksExpense}
            options={{
              tabBarIcon: ({ color, focused }) => {
                if (focused) {
                  return <Ionicons name="reader" size={25} color={color} />;
                }

                return <Ionicons name="reader" size={25} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="StacksAccountStatent"
            component={StacksAccountStatent}
            options={{
              tabBarIcon: ({ color, focused }) => {
                if (focused) {
                  return <Ionicons name="wallet" size={25} color={color} />;
                }

                return <Ionicons name="wallet" size={25} color={color} />;
              },
            }}
          />

          <Tab.Screen
            name="Login"
            component={StacksLogin}
            options={{
              tabBarIcon: ({ color, focused }) => {
                if (focused) {
                  return <Ionicons name="person" size={25} color={color} />;
                }

                return <Ionicons name="person" size={25} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </>
  );
}
