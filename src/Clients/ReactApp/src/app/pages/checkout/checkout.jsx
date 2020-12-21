import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Copyright from "../../components/copyright";
import AddressForm from "../../components/address-form";
import PaymentForm from "../../components/payment-form";
import Review from "../../components/checkout-review";
import "./checkout.scss";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor: " #8bc34a",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function CheckoutPage({
  appName,
  history,
  updateCheckoutListAction,
  basket,
  checkout,
}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  //address
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setzip] = React.useState("");
  const [country, setCountry] = React.useState("");

  // card
  const [cardName, setCardName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expDate, setExpDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    updateCheckoutListAction({
      firstName,
      lastName,
      address1,
      address2,
      city,
      zip,
      state,
      country,
      cardName,
      cardNumber,
      expDate,
      cvv,
    });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className="app-header-panel stick-to-top">
        <Toolbar>
          <Typography
            onClick={() => {
              history.push("/");
            }}
            className="app-header-text"
            variant="h6"
            color="inherit"
            noWrap
          >
            {appName}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className="checkout-stepper">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 ? (
                  <AddressForm
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setAddress1={setAddress1}
                    setAddress2={setAddress2}
                    setCity={setCity}
                    setzip={setzip}
                    setState={setState}
                    setCountry={setCountry}
                  />
                ) : (
                  ""
                )}
                {activeStep === 1 ? (
                  <PaymentForm
                    setCardName={setCardName}
                    setCardNumber={setCardNumber}
                    setExpDate={setExpDate}
                    setCvv={setCvv}
                  />
                ) : (
                  ""
                )}
                {activeStep === 2 ? (
                  <Review
                    basketItems={basket.productСatalog}
                    checkout={checkout}
                  />
                ) : (
                  ""
                )}
                <Box className="checkout-button-row">
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>Back</Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className="checkout-button"
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
