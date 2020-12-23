import {
  FETCH_APPLICATION_DATA,
  UPDATE_APPLICATION_DATA,
  FAILURE_RECEIVE_APPLICATION_DATA,
  SET_BRAND,
  SET_CATEGORY,
} from "../types/applicationData.types";
import { CatalogApi, endpoinst } from "../../constants/api.constants";

const axios = require("axios");

const requestApplicationData = () => ({
  type: FETCH_APPLICATION_DATA,
});

export const setBrand = (id) => ({
  type: SET_BRAND,
  payload: id,
});

export const setCategory = (id) => ({
  type: SET_CATEGORY,
  payload: id,
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
    const data = await axios.get(`${CatalogApi}${endpoinst.item}`);

    dispatch(updateApplicationData(data?.data));
  } catch (error) {
    dispatch(failureReceiveApplicationData(error));
  }
};
