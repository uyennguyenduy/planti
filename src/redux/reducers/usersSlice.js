import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { USERS } from '../../assets/data/USERS';

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
  isLoading: false
}
export const usersSlice = createSlice({
  name: 'users',
  initialState: initialLogin,
  reducers: {}
})

export default usersSlice.reducer;