import {
  ADD_PRODUCT_TO_BUCKET,
  REMOVE_PRODUCT_FROM_BUCKET,
} from "../types/bucket.types";

const initialState = {
  productСatalog: [],
};

const Bucket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BUCKET:
      return {
        ...state,
        authorization: action.payload,
      };

    case REMOVE_PRODUCT_FROM_BUCKET:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default Bucket;
