import React from "react";
import HeaderPaner from "./header-panel";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { clearBasket } from "../../../redux/actions/basket.action";

const HeaderPanelContainer = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const authorisation = useSelector((state) => state.authorisation);
  const basket = useSelector((state) => state.basket);

  const handleClearAction = () => {
    console.log("clear");
    dispatch(clearBasket());
  };

  const handleMakeOrderAction = () => {
    basket.productСatalog.length && history.push("/checkout");
  };

  return (
    <HeaderPaner
      basket={basket.productСatalog}
      isAuthenticated={authorisation.isAuthenticated}
      handleClearAction={handleClearAction}
      handleMakeOrderAction={handleMakeOrderAction}
      {...props}
    />
  );
};

export default withRouter(HeaderPanelContainer);
