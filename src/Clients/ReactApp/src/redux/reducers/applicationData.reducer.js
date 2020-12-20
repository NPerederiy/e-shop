import {
  FETCH_APPLICATION_DATA,
  UPDATE_APPLICATION_DATA,
  FAILURE_RECEIVE_APPLICATION_DATA,
} from "../types/applicationData.types";

const initialState = {
  catalog: [],
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

    case FAILURE_RECEIVE_APPLICATION_DATA:
      return {
        catalog: [],
        isFatching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ApplicationData;
