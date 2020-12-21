import React from "react";
import { withRouter } from "react-router-dom";

import Checkout from "./checkout";

const CheckoutContainer = (props) => {
  return <Checkout {...props} />;
};

export default withRouter(CheckoutContainer);
