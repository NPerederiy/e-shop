import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  CLEAR_BASKET,
} from "../types/basket.types";

const initialState = {
  productСatalog: [],
};

const Basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      console.log(action.payload);
      return {
        ...state,
        productСatalog: [...state.productСatalog, action.payload],
      };

    case REMOVE_PRODUCT_FROM_BASKET:
      return {
        ...state,
        productСatalog: action.payload,
      };
    case CLEAR_BASKET:
      return {
        productСatalog: [],
      };

    default:
      return state;
  }
};

export default Basket;
