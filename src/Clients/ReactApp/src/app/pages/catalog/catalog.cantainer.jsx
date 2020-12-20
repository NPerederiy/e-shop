import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { logOut } from "../../../redux/actions/auth.action";
import Catalog from "./catalog";

const CatalogContainer = (props) => {
  const dispatch = useDispatch();
  const authorisation = useSelector((state) => state.authorisation);

  const handlelogOut = () => {
    dispatch(logOut());
  };

  return (
    <Catalog
      isAuthenticated={authorisation.isAuthenticated}
      handlelogOut={handlelogOut}
      {...props}
    />
  );
};

export default CatalogContainer;
