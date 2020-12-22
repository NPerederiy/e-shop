import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logOut } from "../../../redux/actions/auth.action";
import {
  fetchDashboardData,
  setBrand,
  setCategory,
} from "../../../redux/actions/applicationData.action";
import Catalog from "./catalog";
import { addProductToBasket } from "../../../redux/actions/basket.action";

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

  useEffect(() => {
    setDisplayedItems([
      ...applicationData.catalog.filter(
        (item) => item.catalogTypeId === applicationData.types
      ),
    ]);
    // eslint-disable-next-line
  }, [applicationData.types]);

  useEffect(() => {
    setDisplayedItems([
      ...applicationData.catalog.filter(
        (item) => item.catalogBrandId === applicationData.brands
      ),
    ]);
    // eslint-disable-next-line
  }, [applicationData.brands]);

  const handlelogOut = () => {
    dispatch(logOut());
  };

  const handleAddToCartAction = (item) => {
    dispatch(addProductToBasket(item));
  };

  const handleBrandSelection = (event) => {
    dispatch(setBrand(event.target.id));
  };

  const handleCategorySelection = (event) => {
    dispatch(setCategory(event.target.id));
  };

  return (
    <Catalog
      isAuthenticated={authorisation.isAuthenticated}
      setDisplayedItems={setDisplayedItems}
      isFatching={applicationData.isFatching}
      handlelogOut={handlelogOut}
      displayedItems={displayedItems}
      handleAddToCartAction={handleAddToCartAction}
      handleBrandSelection={handleBrandSelection}
      handleCategorySelection={handleCategorySelection}
      {...props}
    />
  );
};

export default CatalogContainer;
