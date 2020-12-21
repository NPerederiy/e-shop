import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({
  basketItems = [],
  currencyCode = "₴",
  checkout,
}) {
  const classes = useStyles();
  const {
    firstName = "",
    lastName = "",
    address1 = "",
    address2 = "",
    city = "",
    state = "",
    cardNumber = "",
    expDate = "",
  } = checkout;
  let totalPrice = 0;

  basketItems.forEach((item) => {
    totalPrice += +item.price;
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basketItems.map((item) => (
          <ListItem className={classes.listItem} key={item.name}>
            <ListItemText
              primary={item.name}
              secondary={item.count ? `Count: ${item.count}` : ""}
            />
            <Typography variant="body2">
              {!item.price
                ? "Free"
                : item.discount
                ? item.discount * item.count + currencyCode
                : item.price}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {totalPrice}
            {currencyCode}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {firstName} {lastName}
          </Typography>
          <Typography gutterBottom>
            {`${address1} ,${address2} 
            ${city} ,${state}`}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>cardName </Typography>
              </Grid>
            </React.Fragment>

            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card holder</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {firstName} {lastName}{" "}
                </Typography>
              </Grid>
            </React.Fragment>

            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card number</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{cardNumber}</Typography>
              </Grid>
            </React.Fragment>

            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Expiry date</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{expDate}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
