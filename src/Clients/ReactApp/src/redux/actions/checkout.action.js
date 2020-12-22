import { UPDATE_CHECKOUT_LIST } from "../types/checkout.types";
import { OrderingApi, endpoinst } from "../../constants/api.constants";

const axios = require("axios");

export const updateCheckoutList = (data) => ({
  type: UPDATE_CHECKOUT_LIST,
  payload: data,
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
      status: "string",
      paymentToken: "string",
      orderedItems: [
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "string",
          price: 0,
          quantity: 0,
        },
      ],
    });

    console.log(response);
  } catch (error) {
    // dispatch(failureFetch(error));
  }
};
