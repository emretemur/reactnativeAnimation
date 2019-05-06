import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import { Text, View } from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';
import HomeScreen from './home'
import UserScreen from './users'
import CombiScreen from './combi'
import VanScreen from './van'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const AppNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      })
  },
  Users:{
    screen:UserScreen
  },
  Combi:{
    screen:CombiScreen
  },
  Van:{
    screen:VanScreen
  }, 
},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'blue'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  },
  mode:'modal'
})

export default createAppContainer (AppNavigator);