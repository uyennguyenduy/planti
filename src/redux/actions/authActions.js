import { createAction } from "@reduxjs/toolkit";

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginFailed = createAction('auth/loginFailed');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutFailed = createAction('auth/logoutFailed');