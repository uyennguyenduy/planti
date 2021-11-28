import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../../App.js';
import { HomeTabNavigator } from './HomeTabNavigator';
import { WelcomeScreen } from '../../component/OnboadingScreens/WelcomeScreen.js';
import { LoginScreen } from '../../component/OnboadingScreens/LoginScreen/index';
import { SignupScreen } from '../../component/OnboadingScreens/SignupScreen/index.js';
import { RecoveryScreen } from '../../component/OnboadingScreens/RecoveryScreen/index.js';



const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  const { state } = useContext(AuthContext);
  if ( state.isLoading ) {
    return (
      <View>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={{
        headerTransparent: false,
        headerShown:false,
        headerStyle: {
          borderBottomWidth: 0
        },
        headerTintColor: 'white',
      }}
    >
      { state.userToken == null ? (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          <Stack.Screen name="Recovery" component={RecoveryScreen}/>
        </>
      ) : (
        <>
          <Stack.Screen 
            name="Home" 
            component={HomeTabNavigator}
          />
        </>
      )

      }
    </Stack.Navigator>
  )
}
  


  