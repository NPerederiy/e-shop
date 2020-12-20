import React from "react";
import HeaderPaner from "./header-panel";
import { useSelector } from "react-redux";

const HeaderPanelContainer = (props) => {
  const authorisation = useSelector((state) => state.authorisation);

  return (
    <HeaderPaner isAuthenticated={authorisation.isAuthenticated} {...props} />
  );
};

export default HeaderPanelContainer;
