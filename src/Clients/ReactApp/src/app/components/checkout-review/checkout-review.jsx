import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const testItems = [
    {
        id: 0,
        name: 'Клавиатура Apple Magic Keyboard RU+Numeric Keypad (White) MQ052RS/A',
        price: '5199',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/d/0d3b423126eedb0a1e72941da3a25c91.jpg',
        count: 1
    },
    {
        id: 1,
        name: 'Клавиатура Apple Magic Keyboard RU (Space Grey) MRMH2',
        price: '5399',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/d/a/daaeb5392dd2597f0aeeee0cbfe6a6bf.jpg',
        count: 1
    },
    {
        id: 5,
        name: 'Игровая клавиатура Razer Black Widow X Chroma Mercury Edition (RZ03-01762000-R3M1)',
        price: '3199',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/1/f/1fc1d398a0c00dc193d119ce0ff46e35.jpg',
        discount: '2999',
        count: 2
    },
    {
        id: 7,
        name: 'Игровая клавиатура Razer Huntsman mini Purple Switch (RZ03-03390100-R3M1)',
        price: '3199',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/1/014ad9203cae6644956356a7b580dc63.jpg',
        discount: '3799',
        count: 1
    },
    { 
        name: 'Shipping', 
        price: 0,
        count: 0
    },
]

const addresses = ['1 Lorem Ipsum Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

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
    basketItems = testItems,
    currencyCode = '₴',
}) {
    const classes = useStyles();

    let totalPrice = 0;

    basketItems.forEach(item => {
        console.log(item);
        totalPrice += item.discount ? item.count * item.discount : item.count * item.price;
    })

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basketItems.map((item) => (
          <ListItem className={classes.listItem} key={item.name}>
            <ListItemText primary={item.name} secondary={item.count ? `Count: ${item.count}` : ''} />
            <Typography variant="body2">
                {!item.price ? 'Free' : 
                item.discount ? item.discount*item.count + currencyCode : item.price*item.count + currencyCode}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {totalPrice}{currencyCode}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}