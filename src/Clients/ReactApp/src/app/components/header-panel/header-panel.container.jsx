import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import HeaderPaner from "./header-panel";
import { clearBasket } from "../../../redux/actions/basket.action";

const HeaderPanelContainer = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const authorisation = useSelector((state) => state.authorisation);
  const basket = useSelector((state) => state.basket);

  const handleClearAction = () => {
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
