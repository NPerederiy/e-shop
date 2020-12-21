import { UPDATE_CHECKOUT_LIST } from "../types/checkout.types";

export const updateCheckoutList = (data) => ({
  type: UPDATE_CHECKOUT_LIST,
  payload: data,
});
