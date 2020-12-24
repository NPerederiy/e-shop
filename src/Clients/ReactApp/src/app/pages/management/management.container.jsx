import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import ManagementPanel from "./management";

const ManagementContainer = (props) => {
  //   const { history } = props;
  //   const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const applicationData = useSelector((state) => state.applicationData);

  //   const handleClearAction = () => {
  //     dispatch(clearBasket());
  //   };

  //   const handleMakeOrderAction = () => {
  //     basket.productСatalog.length && history.push("/checkout");
  //   };

  return (
    <ManagementPanel
      basket={basket.productСatalog}
      applicationData={applicationData}
      //   handleClearAction={handleClearAction}
      //   handleMakeOrderAction={handleMakeOrderAction}
      {...props}
    />
  );
};

export default withRouter(ManagementContainer);
