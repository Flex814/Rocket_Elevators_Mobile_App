import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "../app/screens/LogIn";
import Home from "../app/screens/Home";
import ElevatorStatuses from "../app/screens/ElevatorStatuses";

const AppNavigator = createStackNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <AppNavigator.Navigator>
      <AppNavigator.Screen name="Log-In" component={LogIn} />
      <AppNavigator.Screen name="Home" component={Home} />
      <AppNavigator.Screen
        name="ElevatorStatuses"
        component={ElevatorStatuses}
      />
    </AppNavigator.Navigator>
  </NavigationContainer>
);
