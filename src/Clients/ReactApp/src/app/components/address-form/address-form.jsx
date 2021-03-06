import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm(props) {
  const {
    setFirstName,
    setLastName,
    setAddress1,
    setAddress2,
    setCity,
    setzip,
    setState,
    setCountry,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    country,
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={firstName}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            value={lastName}
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            value={address1}
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={(event) => setAddress1(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={address2}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            onChange={(event) => setAddress2(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={city}
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={(event) => setCity(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={state}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            onChange={(event) => setState(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={zip}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={(event) => setzip(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={country}
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={(event) => setCountry(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
