import { UPDATE_SIGN_UP, UPDATE_SIGN_IN, LOG_OUT } from "../types/auth.types";

export const updateSignUpData = (data) => ({
  type: UPDATE_SIGN_UP,
  payload: data,
});

export const SignIn = (data) => ({
  type: UPDATE_SIGN_IN,
  payload: data,
});

export const logOut = () => ({
  type: LOG_OUT,
});
