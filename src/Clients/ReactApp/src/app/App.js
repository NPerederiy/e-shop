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
  const { loggedIn } = props;
  const appName = "e-shop";
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth">
            {!loggedIn ? (
              <Redirect to="/" />
            ) : (
              <AuthPage appName={appName} {...props} />
            )}
          </Route>

          <Route path="/checkout">
            {loggedIn ? (
              <Redirect to="/auth" />
            ) : (
              <CheckoutPage appName={appName} {...props} />
            )}
          </Route>
          <Route path="/management">
            {loggedIn ? (
              <Redirect to="/auth" />
            ) : (
              <ManagementPage appName={appName} {...props} />
            )}
          </Route>

          <Route exact path="/">
            {loggedIn ? (
              <Redirect to="/auth" />
            ) : (
              <CatalogPage appName={appName} {...props} />
            )}
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
