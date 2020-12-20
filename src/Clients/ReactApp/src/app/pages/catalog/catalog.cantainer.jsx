import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logOut } from "../../../redux/actions/auth.action";
import { fetchDashboardData } from "../../../redux/actions/applicationData.action";
import Catalog from "./catalog";

const CatalogContainer = (props) => {
  const dispatch = useDispatch();
  const authorisation = useSelector((state) => state.authorisation);
  const applicationData = useSelector((state) => state.applicationData);

  useEffect(() => {
    dispatch(fetchDashboardData());
    // eslint-disable-next-line
  }, []);

  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    setDisplayedItems(applicationData.catalog);
  }, [applicationData.catalog]);

  const handlelogOut = () => {
    dispatch(logOut());
  };

  return (
    <Catalog
      isAuthenticated={authorisation.isAuthenticated}
      setDisplayedItems={setDisplayedItems}
      isFatching={applicationData.isFatching}
      handlelogOut={handlelogOut}
      catalog={applicationData.catalog}
      displayedItems={displayedItems}
      {...props}
    />
  );
};

export default CatalogContainer;
