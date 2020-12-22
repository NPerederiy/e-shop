import { UPDATE_CHECKOUT_LIST } from "../types/checkout.types";

const initialState = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  cardName: "",
  cardNumber: "",
  expDate: "",
  cvv: "",
  totalPrice: "",
  orderNumber: "#22441444234",
};

const Basket = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKOUT_LIST:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default Basket;
