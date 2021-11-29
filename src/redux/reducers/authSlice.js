import React from "react";
import { createAction, createSlice } from "@reduxjs/toolkit";


const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginFailed = createAction('auth/loginFailed');

const initialLogin = {
  user: {
    isSignedIn: false,
    userToken: null,
    password: null,
    avatar: null,
    userId: null,
    url: null,
    userName: null
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
    .addCase()
  }
})

export default authSlice.reducer;