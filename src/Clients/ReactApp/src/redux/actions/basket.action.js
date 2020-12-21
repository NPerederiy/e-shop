import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  CLEAR_BASKET,
} from "../types/basket.types";

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});

export const addProductToBasket = (data) => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload: data,
});

export const removeProductFromBasket = (data) => ({
  type: REMOVE_PRODUCT_FROM_BASKET,
  payload: data,
});
