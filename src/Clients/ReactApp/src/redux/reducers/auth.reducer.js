import { UPDATE_SIGN_UP, UPDATE_SIGN_IN, LOG_OUT } from "../types/auth.types";

const initialState = {
  isAuthenticated: false,
  id: null,
  token: null,
  isAdmin: false,
  email: "",
  password: "",
};

const UserData = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGN_UP:
      return {
        ...state,
        authorization: action.payload,
      };

    case UPDATE_SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };

    case LOG_OUT:
      return {
        isAuthenticated: false,
        id: null,
        token: null,
        isAdmin: false,
        email: "",
        password: "",
      };
    default:
      return state;
  }
};

export default UserData;
