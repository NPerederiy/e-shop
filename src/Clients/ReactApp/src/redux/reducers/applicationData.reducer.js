import {
  FETCH_APPLICATION_DATA,
  UPDATE_APPLICATION_DATA,
  FAILURE_RECEIVE_APPLICATION_DATA,
  SET_BRAND,
  SET_CATEGORY,
} from "../types/applicationData.types";

const initialState = {
  catalog: [],
  brands: "all",
  types: "all",
  isFatching: false,
  error: "",
};

const ApplicationData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPLICATION_DATA:
      return {
        ...state,
        isFatching: true,
      };
    case UPDATE_APPLICATION_DATA:
      return {
        ...state,
        isFatching: false,
        catalog: action.payload,
      };
    case SET_BRAND:
      return {
        ...state,
        brands: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        types: action.payload,
      };

    case FAILURE_RECEIVE_APPLICATION_DATA:
      return {
        catalog: [],
        brands: "all",
        types: "all",
        isFatching: false,
        error: "",
      };
    default:
      return state;
  }
};

export default ApplicationData;
