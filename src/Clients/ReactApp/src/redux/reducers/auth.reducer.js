import { UPDATE_SIGN_UP, UPDATE_SIGN_IN, LOG_OUT } from "../types/auth.types";

const initialState = {
  isAuthenticated: false,
  email: "",
  password: "",
};

const UserData = (state = initialState, action) => {
  switch (action.type) {
    // SIGN_UP
    case UPDATE_SIGN_UP:
      return {
        ...state,
        authorization: action.payload,
      };

    //SignIn
    case UPDATE_SIGN_IN:
      console.log(action.payload);

      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };

    //LOG_OUT
    case LOG_OUT:
      return {
        isAuthenticated: false,
        email: "",
        password: "",
      };
    default:
      return state;
  }
};

export default UserData;
