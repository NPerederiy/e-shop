import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  CLEAR_BASKET,
  INCREASE_COUNT,
  DECREASE_COUNT,
} from "../types/basket.types";

const initialState = {
  productСatalog: [],
};

const Basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return {
        ...state,
        productСatalog: [...state.productСatalog, action.payload],
      };

    case REMOVE_PRODUCT_FROM_BASKET:
      return {
        ...state,
        productСatalog: action.payload,
      };

    case INCREASE_COUNT:
      const indexI = state.productСatalog.findIndex(
        (item) => item.id === action.payload
      );
      console.log("find index dex", indexI);

      return {
        ...state,
        productСatalog: [
          ...state.productСatalog.slice(0, indexI),
          {
            ...state.productСatalog[indexI],
            count: state.productСatalog[indexI].count + 1,
          },
          ...state.productСatalog.slice(indexI + 1),
        ],
      };

    case DECREASE_COUNT:
      const indexD = state.productСatalog.findIndex(
        (item) => item.id === action.payload
      );

      return {
        ...state,
        productСatalog: [
          ...state.productСatalog.slice(0, indexD),
          {
            ...state.productСatalog[indexD],
            count: state.productСatalog[indexD].count - 1,
          },
          ...state.productСatalog.slice(indexD + 1),
        ],
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
