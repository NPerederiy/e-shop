import { UPDATE_CHECKOUT_LIST, SET_ORDER } from "../types/checkout.types";
import { OrderingApi, endpoinst } from "../../constants/api.constants";

const axios = require("axios");

export const updateCheckoutList = (data) => ({
  type: UPDATE_CHECKOUT_LIST,
  payload: data,
});

const setOrder = (id) => ({
  type: SET_ORDER,
  payload: id,
});

export const sendOrder = (data) => async (dispatch, getState) => {
  const basket = getState().basket;
  const checkout = getState().checkout;

  const { productСatalog } = basket;
  const { firstName, lastName, city, address1, state, country, zip } = checkout;

  let totalPrice = 0;

  productСatalog.forEach((item) => {
    totalPrice += +item.price * item.count;
  });

  const configuredBasketCatalog = productСatalog.map((item) => {
    return {
      name: item.name,
      price: item.price,
      quantity: item.count,
      productId: item.id,
    };
  });

  try {
    const response = await axios.post(`${OrderingApi}${endpoinst.order}`, {
      orderNumber: 0,
      buyer: `${firstName} ${lastName}`,
      city: city,
      street: address1,
      state: state,
      country: country,
      zipCode: zip,
      totalPrice: totalPrice,
      paymentToken: "string",
      orderedItems: configuredBasketCatalog,
    });

    dispatch(setOrder(response.data));
  } catch (error) {
    // dispatch(failureFetch(error));
  }
};
