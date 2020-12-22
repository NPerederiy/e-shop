import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import BasketItem from "../basket-item";
import "./basket.scss";

const Basket = ({ basket = [], handleClearAction, handleMakeOrderAction }) => {
  const [totalPrice, settotalPrice] = React.useState(0);
  React.useEffect(() => {
    let price = 0;

    basket.forEach((item) => {
      price += +item.price * item.count;
    });

    settotalPrice(price);
  }, [basket]);

  return (
    <Box className="basket-popper-container">
      <Box>
        {basket ? (
          <Box id="">
            {basket.map((item) => (
              <BasketItem
                key={item.id}
                className="basket-popper-item"
                {...item}
              />
            ))}
          </Box>
        ) : (
          <>The basket is empty</>
        )}
      </Box>
      <Box className="basket-popper-footer stick-to-bottom">
        <Box className="basket-popper-total-price">
          Total price:
          <Box component="span" className="price">
            {totalPrice}
          </Box>
        </Box>
        <Box className="basket-popper-button-row">
          <Button variant="contained" size="large" onClick={handleClearAction}>
            Clear
          </Button>
          <Button
            className="basket-popper-make-order-button"
            variant="contained"
            size="large"
            onClick={handleMakeOrderAction}
          >
            Make order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Basket;
