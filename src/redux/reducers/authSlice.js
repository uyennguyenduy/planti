import React from "react";
import { createAction, createSlice, isAnyOf} from "@reduxjs/toolkit";
import { loginFailed, loginRequest, loginSuccess, logoutFailed, logoutRequest, logoutSuccess, passwordForgetFailed, passwordForgetRequest, passwordForgetSuccess, signupFailed, signupRequest, signupSuccess } from "../actions/authActions";


const initialLogin = {
  user: {
    userId: null,
    userName: null,
    isSignedIn: false,
    userToken: null,
    password: null,
    avatar: null,
    url: null,
    
  },
  isLoading: false,
  authResult: null,
  error: null
}
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialLogin,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginSuccess, (state, action) => {
      console.log(action.payload);
      return {
        isLoading: false,
        authResult: action.payload.authResult,
      }
    })
    .addCase(loginFailed, (state, action) => {
      console.log(action.payload)
      return {
        isLoading: false,
        authResult: action.payload.authResult,
        error: action.payload.error
      }
    })
    .addCase(signupSuccess, (state, action) => {
      return {
        isLoading: false,
        authResult: action.payload.authResult
      }
    })
    .addCase(signupFailed, (state, action) => {
      console.log(action.payload)
      return {
        isLoading: false,
        authResult: action.payload.authResult,
        error: action.payload.error
      }
    })
    .addCase(passwordForgetSuccess, (state, action) => {
      return {
        isLoading: false,
        authResult: 'success'
      }
    })
    .addCase(passwordForgetFailed, (state, action) => {
      return {
        isLoading: false,
        authResult: action.payload.authResult,
        error: action.payload.error
      }
    })
    .addMatcher(
      isAnyOf(loginRequest, logoutRequest, signupRequest, passwordForgetRequest), 
      (state, action) => {
        return {
          isLoading: true,
        }
      })
    .addMatcher(
      isAnyOf(logoutSuccess, logoutFailed), 
      (state, action) => {
        return {
          isLoading: false
        }
      })
  }
})
export const selectAuthUser = state => state.authUser;

export default authSlice.reducer;