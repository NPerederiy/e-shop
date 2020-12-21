import {
  FETCH_APPLICATION_DATA,
  UPDATE_APPLICATION_DATA,
  FAILURE_RECEIVE_APPLICATION_DATA,
} from "../types/applicationData.types";
import { host, endpoinst } from "../../constants/api.constants";

const axios = require("axios");

const requestApplicationData = () => ({
  type: FETCH_APPLICATION_DATA,
});

export const updateApplicationData = (data) => ({
  type: UPDATE_APPLICATION_DATA,
  payload: data,
});

const failureReceiveApplicationData = (err) => ({
  type: FAILURE_RECEIVE_APPLICATION_DATA,
  payload: err,
});

export const fetchDashboardData = () => async (dispatch) => {
  dispatch(requestApplicationData());

  try {
    const data = await axios.get(`${host}${endpoinst.item}`);

    dispatch(updateApplicationData(data?.data));
  } catch (error) {
    dispatch(failureReceiveApplicationData(error));
  }
};
