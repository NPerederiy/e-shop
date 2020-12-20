import React from "react";
import { useSelector } from "react-redux";

import App from "./App";

const AppContainer = (props) => {
  const authorisation = useSelector((state) => state.authorisation);

  return (
    <App
      loggedIn={authorisation.isAuthenticated}
      isAdmin={authorisation.isAuthenticated}
      {...props}
    />
  );
};

export default AppContainer;
