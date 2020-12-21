import React from "react";
import Box from "@material-ui/core/Box";

import Counter from "../counter";
import "./basket-item.scss";
import defaultImage from "../../../assets/camera-100.png";

const BasketItem = ({
  className,
  name,
  price,
  count,
  img,
  discount,
  id,
  currencyCode = "UAH",
}) => {
  return (
    <Box id="basket-item-container" className={className}>
      <img
        src={img ?? defaultImage}
        className={
          img
            ? "basket-item-image interactive"
            : "basket-item-image placeholder interactive"
        }
        alt="product"
      />
      <Box className="basket-item-description">
        <p className="basket-item-header">{name}</p>
        <Box className="price-and-count">
          {discount ? (
            <Box>
              <Box component="span" className="basket-item-price">
                {discount}
              </Box>
              <Box component="span" className="basket-item-price-old">
                {price}
              </Box>
              <Box component="span" className="basket-item-currency-code">
                {currencyCode}
              </Box>
            </Box>
          ) : (
            <Box>
              <Box component="span" className="basket-item-price">
                {price}
              </Box>
              <Box component="span" className="basket-item-currency-code">
                {currencyCode}
              </Box>
            </Box>
          )}
          <Counter id={id} count={count} />
        </Box>
      </Box>
    </Box>
  );
};

export default BasketItem;
