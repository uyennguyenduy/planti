
import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from './src/container/navigation/RootStackNavigator';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { store } from './src/redux/store/store';
import { initialUsersState, usersReducer } from "./src/redux/reducers/loginReducer";
import { Text, View } from "react-native";

export const AuthContext = createContext();

function App() {
  const [ state, dispatch ] = useReducer(usersReducer, initialUsersState);
  
  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        await AsyncStorage.getItem('userToken')
      } catch(err) {
        console.log(err)
      }
      //console.log(' user token: ', userToken);
      dispatch({type: 'REGISTER', token: userToken})
    }, 1000);
  }, []);

  const authContext = useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username
      try {
        userToken = 'faken';
        await AsyncStorage.setItem('userToken', userToken)
      } catch(err) {
        console.log(err);
      }
      
      console.log(' user token: ', userToken);
      dispatch({type: 'SIGN_IN', id: userName, token: userToken})
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(err) {
        console.log(err);
      }
      dispatch({type: 'SIGN_OUT'})
    },
  }), []);
  return (
    <Provider store={store}>
      <AuthContext.Provider value={{state, authContext}}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
    </AuthContext.Provider>
    </Provider>
    
  );
};



export default App;
