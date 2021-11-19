import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../../App.js';
import { Loading } from '../../component/LoginScreens/Loading.js';
import { Welcome } from '../../component/LoginScreens/Welcome.js.js';
import { Login } from '../../component/LoginScreens/Login';
import { Signup } from '../../component/LoginScreens/Signup';
import { Recovery } from '../../component/LoginScreens/Recovery';
import { HomeTabNavigator } from './HomeTabNavigator';



const Stack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  const { state } = useContext(AuthContext);
  if ( state.isLoading ) {
    return (
      <Loading/>
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
          <Stack.Screen name="Welcome" component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Recovery" component={Recovery}/>
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
  


  