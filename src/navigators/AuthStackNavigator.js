import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {View, StyleSheet, Text} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'LoginStack '}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen
              name={'Login'}
              component={LoginScreen}></LoginStack.Screen>
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>

      <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
      <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
    </AuthStack.Navigator>
  );
}
