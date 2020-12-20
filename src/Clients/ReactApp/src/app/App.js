import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CatalogPage from "./pages/catalog";
import AuthPage from "./pages/authentication";
import CheckoutPage from "./pages/checkout";
import ManagementPage from "./pages/management";

import "./app.scss";

const App = (props) => {
  const { isAdmin } = props;

  const appName = "e-shop";
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth">
            <AuthPage appName={appName} {...props} />
          </Route>

          <Route path="/checkout">
            <CheckoutPage appName={appName} {...props} />
          </Route>
          <Route path="/management">
            {isAdmin ? (
              <ManagementPage appName={appName} {...props} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route exact path="/">
            <CatalogPage appName={appName} {...props} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
