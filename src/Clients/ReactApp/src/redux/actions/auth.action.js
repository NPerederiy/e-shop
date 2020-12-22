import { UPDATE_SIGN_UP, UPDATE_SIGN_IN, LOG_OUT } from "../types/auth.types";
import { host, endpoinst } from "../../constants/api.constants";

const axios = require("axios");

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
