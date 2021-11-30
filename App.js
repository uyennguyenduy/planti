
import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from './src/container/navigation/RootStackNavigator';
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/redux/store/store";
import { navigationRef } from "./src/container/navigation/RootStackNavigator";
import { syncUserRequest } from "./src/redux/actions/authActions";

export const AuthContext = createContext();

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>  
  );
};

export default App;
