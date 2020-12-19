import React from "react";
import App from "./App";

const loggedIn = true;

const AppContainer = (props) => {
  return <App loggedIn={!loggedIn} {...props} />;
};

export default AppContainer;
