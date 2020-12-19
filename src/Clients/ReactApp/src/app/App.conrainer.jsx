import React from "react";
import App from "./App";

const loggedIn = true;
const isAdmin = true;

const AppContainer = (props) => {
  return <App loggedIn={!loggedIn} isAdmin={isAdmin} {...props} />;
};

export default AppContainer;
