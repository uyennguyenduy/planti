import { createAction } from "@reduxjs/toolkit";
import { getLastUpdateTimeSync } from "react-native-device-info";

export const syncUserRequest =  createAction('auth/syncUserRequest');
export const syncUserSuccess = createAction('auth/syncUserSuccess');
export const syncUserFailed = createAction('auth/syncUserFailed');
//signup
export const signupRequest = createAction('auth/signupRequest');
export const signupSuccess = createAction('auth/signupSuccess', function prepare(response) {
  return {
    payload: {
      authResult: 'success'
    }
  }
});
export const signupFailed = createAction('auth/signupFailed', function prepare(error) {
  const errorCode = error.code;
  let errMessage = '';
  if (errorCode === 'auth/email-already-in-use') {
    errMessage = "That email is already in use"
  } 
  else if (errorCode === 'auth/invalid-email') {
    errMessage = "That email address is invalid"
  } else {
    errMessage = error.message
  }

  return {
    payload: {
      authResult: 'failed',
      error: errMessage
    }
  }
});

//login
export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess', function prepare(response) {
  return {
    payload: {
      userId: response.user.uid,
      email: response.user.email,
      authResult: 'success'
    }
  }
});
export const loginFailed = createAction('auth/loginFailed', function prepare(error) {
  const errorCode = error.code;
  let errMessage = '';

  if (errorCode === 'auth/user-not-found') {
    errMessage = "User is not found"
  } else if (errorCode === "auth/wrong-password") {
    errMessage = "Wrong password"
  } else {
    errMessage = error.message
  }

  return {
    payload: {
      authResult: 'failed',
      error: errMessage
    }
  }
});
//logout
export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutFailed = createAction('auth/logoutFailed');

//forgot password
export const passwordForgetRequest = createAction('auth/passwordForgetRequest');
export const passwordForgetSuccess = createAction('auth/passwordForgetSuccess');
export const passwordForgetFailed = createAction('auth/passwordForgetFailed', function prepare() {
  const errorCode = error.code;
  let errMessage = '';

  if (errorCode === 'auth/user-not-found') {
    errMessage = "User is not found"
  } else if (errorCode === "auth/invalid-email") {
    errMessage = "Email is not valid"
  } else {
    errMessage = error.message
  }
  return {
    payload: {
      authResult: 'failed',
      error: errMessage
    }
  }
});

//change password

export const passwordChangeRequest = createAction('auth/passwordChangeRequest');
export const passwordChangeSuccess = createAction('auth/passwordChangeSucces');
export const passwordChangeFailed = createAction('auth/passwordChangeFailed');