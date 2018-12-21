import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Details from "./views/Details"
import Home from "./views/Home"

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen : Home,
      navigationOptions: () => ({
        header: null,
      }),
    } ,
    Details:{
      screen : Details,
      navigationOptions: () => ({
        title: '详情页面',
      }),
    } 
  },
  {
    initialRouteName: "Home"
  });

export default createAppContainer(AppNavigator);