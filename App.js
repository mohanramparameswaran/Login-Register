import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {lightTheme} from './src/themes/Light';

import {View, StyleSheet, Text} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

import AuthStackNavigator from './src/navigators/AuthStackNavigator';

const RootStack = createStackNavigator();

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={lightTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
