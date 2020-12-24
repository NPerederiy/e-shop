import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";
import {fetchDashboardData} from '../../../redux/actions/applicationData.action';
import ManagementPanel from "./management";

const ManagementContainer = (props) => {
    const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const applicationData = useSelector((state) => state.applicationData);

    const updateList = () => {
      dispatch(fetchDashboardData());
    };

  return (
    <ManagementPanel
      basket={basket.productСatalog}
      applicationData={applicationData}
      updateList={updateList}
      {...props}
    />
  );
};

export default withRouter(ManagementContainer);
