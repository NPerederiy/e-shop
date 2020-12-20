import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInForm = ({
  signInAction,
  signUpRedirectAction,
  forgotPasswordAction,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const signInLabel = "Sign in";
  const signUpRedirectLabel = "Don't have an account? Sign Up";
  const forgotPasswordLabel = "Forgot password?";

  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Typography component="h1" variant="h5">
        {signInLabel}
      </Typography>
      <form className={classes.form} noValidate onClick={handleForm}>
        <TextField
          value={email}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          value={password}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            signInAction(email, password);
          }}
          disabled={!email.length || !password.length}
        >
          {signInLabel}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link onClick={forgotPasswordAction} href="#" variant="body2">
              {forgotPasswordLabel}
            </Link>
          </Grid>
          <Grid item>
            <Link onClick={signUpRedirectAction} href="#" variant="body2">
              {signUpRedirectLabel}
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignInForm;
