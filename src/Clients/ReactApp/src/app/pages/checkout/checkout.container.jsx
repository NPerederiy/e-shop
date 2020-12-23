import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Checkout from "./checkout";
import { updateCheckoutList } from "../../../redux/actions/checkout.action";
import { clearBasket } from "../../../redux/actions/basket.action";
import { sendOrder } from "../../../redux/actions/checkout.action";

const CheckoutContainer = (props) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const checkout = useSelector((state) => state.checkout);

  const updateCheckoutListAction = (data) => {
    dispatch(updateCheckoutList(data));
  };
  const clearBasketAction = () => {
    dispatch(clearBasket());
  };

  const sendOrderAction = () => {
    dispatch(sendOrder());
  };

  return (
    <Checkout
      updateCheckoutListAction={updateCheckoutListAction}
      clearBasketAction={clearBasketAction}
      basket={basket}
      checkout={checkout}
      sendOrderAction={sendOrderAction}
      {...props}
    />
  );
};

export default withRouter(CheckoutContainer);
