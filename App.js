import React from "react";

// React Navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Screens
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import CarListScreen from "./src/screens/CarListScreen";
import CarDetailScreen from "./src/screens/CarDetailScreen";
import AccountScreen from "./src/screens/AccountScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),

  mainFlow: createBottomTabNavigator({
    carListFlow: createStackNavigator({
      CarList: CarListScreen,
      CarDetail: CarDetailScreen
    }),
    Account: AccountScreen
  })
});

export default createAppContainer(switchNavigator);
