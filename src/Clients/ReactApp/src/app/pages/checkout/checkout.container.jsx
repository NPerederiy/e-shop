import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Checkout from "./checkout";
import { updateCheckoutList } from "../../../redux/actions/checkout.action";

const CheckoutContainer = (props) => {
  const dispatch = useDispatch();

  const updateCheckoutListAction = (data) => {
    dispatch(updateCheckoutList(data));
  };

  return (
    <Checkout updateCheckoutListAction={updateCheckoutListAction} {...props} />
  );
};

export default withRouter(CheckoutContainer);
