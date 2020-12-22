import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import Copyright from "../../components/copyright";
import SignUpForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form";
import { fetchSignIn, fetchSignUp } from "../../../redux/actions/auth.action";

import "./authentication.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const AuthPage = (props) => {
  const { history } = props;
  const [firstTime, setFistTime] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  const signInRedirectAction = () => {
    setFistTime(false);
  };

  const signUpRedirectAction = () => {
    setFistTime(true);
  };

  const signInAction = (email, password) => {
    dispatch(fetchSignIn({ email, password }));
    history.push("/");
  };

  const signUpAction = (firstName, lastName, email, password) => {
    dispatch(fetchSignUp({ firstName, lastName, email, password }));
  };

  const forgetPasswordAction = () => {
    console.log("forget password");
    // TODO: Implement the action.
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {firstTime ? (
            <SignUpForm
              signUpAction={signUpAction}
              signInRedirectAction={signInRedirectAction}
            />
          ) : (
            <SignInForm
              signInAction={signInAction}
              signUpRedirectAction={signUpRedirectAction}
              forgotPasswordAction={forgetPasswordAction}
            />
          )}
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(AuthPage);
