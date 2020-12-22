import { UPDATE_SIGN_UP, UPDATE_SIGN_IN, LOG_OUT } from "../types/auth.types";
import { host, endpoinst } from "../../constants/api.constants";

const axios = require("axios");

export const updateSignUpData = (data) => ({
  type: UPDATE_SIGN_UP,
  payload: data,
});

const SignIn = (data) => ({
  type: UPDATE_SIGN_IN,
  payload: data,
});
const SignUP = (data) => ({
  type: UPDATE_SIGN_IN,
  payload: data,
});

export const logOut = () => ({
  type: LOG_OUT,
});

const failureFetch = (err) => ({
  type: "FAILURE_FETCH",
  payload: err,
});

export const fetchSignIn = (data) => async (dispatch) => {
  const { email, password } = data;

  try {
    //TODO get user id token
    const data = await axios.post(`${host}${endpoinst.signin}`, {
      email,
      password,
    });

    //TODO
    // set  email, password
    dispatch(SignIn(data?.data));
  } catch (error) {
    dispatch(failureFetch(error));
  }
};
export const fetchSignUp = (data) => async (dispatch) => {
  const { firstName, lastName, email, password } = data;

  try {
    const data = await axios.post(`${host}${endpoinst.signup}`, {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(data);
    dispatch(SignUP(data?.data));
  } catch (error) {
    dispatch(failureFetch(error));
  }
};
