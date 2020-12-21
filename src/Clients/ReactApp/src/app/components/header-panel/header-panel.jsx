import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { Link } from "react-router-dom";

import Basket from "../basket";
import Select from "../select";
import SearchBar from "../search-bar";
import "./header-panel.scss";

const handleProfileOpen = () => {
  console.log("profile");
};

const HeaderPanel = ({
  text,
  basket,
  isAuthenticated,
  categories,
  userMenu,
  userMenuSelection,
  brands,
  categorySelection,
  brandSelection,
  searchAction,
  handleClearAction,
  handleMakeOrderAction,
}) => {
  const [basketOpen, setBasketOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleBasketOpen = () => {
    setBasketOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //     return;
    // }

    setBasketOpen(false);
  };

  return (
    <AppBar position="static" className="app-header-panel stick-to-top">
      <Toolbar className="app-header-tools">
        <Typography className="app-header-text" variant="h6" color="inherit">
          {text}
        </Typography>
        <Select
          name="Categories"
          options={categories}
          optionSelection={categorySelection}
        />
        <Select
          name="Brands"
          options={brands}
          optionSelection={brandSelection}
        />
        <SearchBar searchAction={searchAction} />
        <IconButton
          ref={anchorRef}
          className="app-header-button"
          onClick={handleBasketOpen}
        >
          <ShoppingCartIcon />
        </IconButton>
        <Popper
          open={basketOpen}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <Basket
                    basket={basket}
                    handleClearAction={handleClearAction}
                    handleMakeOrderAction={handleMakeOrderAction}
                  />
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {isAuthenticated ? (
          <>
            <Select
              isShowIcon
              options={userMenu}
              optionSelection={userMenuSelection}
            ></Select>
          </>
        ) : (
          <Link to="/auth">
            <IconButton
              className="app-header-button"
              onClick={handleProfileOpen}
            >
              <AccountCircleIcon />
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPanel;
