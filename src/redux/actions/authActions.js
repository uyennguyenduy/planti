import { createAction } from "@reduxjs/toolkit";

export const signupRequest = createAction('auth/loginRequest');
export const signupSuccess = createAction('auth/loginSuccess');
export const signFailed = createAction('auth/loginFailed');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginFailed = createAction('auth/loginFailed');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutFailed = createAction('auth/logoutFailed');