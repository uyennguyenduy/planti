import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTabNavigator } from './HomeTabNavigator';
import { WelcomeScreen } from '../../component/OnboadingScreens/WelcomeScreen.js';
import { LoginScreen } from '../../component/OnboadingScreens/LoginScreen/index';
import { SignupScreen } from '../../component/OnboadingScreens/SignupScreen/index.js';
import { RecoveryScreen } from '../../component/OnboadingScreens/RecoveryScreen/index.js';
import { createNavigationContainerRef } from '@react-navigation/core';




const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export const RootStackNavigator = () => {

  return (
    <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={{
        headerTransparent: true,
        headerShown: false,
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>
      <Stack.Screen name="Recovery" component={RecoveryScreen}/>
  
      <Stack.Screen 
        name="Home" 
         component={HomeTabNavigator}
      />
    </Stack.Navigator>
  )
}
  


  