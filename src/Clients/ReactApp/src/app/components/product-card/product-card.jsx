import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import defaultImage from "./../../../assets/camera-100.png";
import "./product-card.scss";

const handleCardClick = () => {
  console.log("click on card");
};

const ProductCard = ({
  name,
  price,
  img,
  pictureUri,
  discount,
  currencyCode = "UAH",
  buttonLabel = "Add to cart",
  addToCartAction,
}) => (
  <Box id="product-card-container">
    <img
      src={pictureUri ?? defaultImage}
      className={
        pictureUri
          ? "product-card-image interactive"
          : "product-card-image placeholder interactive"
      }
      alt="product"
      onClick={handleCardClick}
    />
    <p onClick={handleCardClick} className="product-card-header interactive">
      {name}
    </p>
    {discount ? (
      <Box>
        <Box component="span" className="product-card-price">
          {discount}
        </Box>
        <Box component="span" className="product-card-price-old">
          {price}
        </Box>
        <Box component="span" className="product-card-currency-code">
          {currencyCode}
        </Box>
      </Box>
    ) : (
      <Box>
        <Box component="span" className="product-card-price">
          {price}
        </Box>
        <Box component="span" className="product-card-currency-code">
          {currencyCode}
        </Box>
      </Box>
    )}
    <Button
      className="product-card-button"
      variant="contained"
      size="large"
      startIcon={<AddShoppingCartIcon />}
      onClick={addToCartAction}
    >
      {buttonLabel}
    </Button>
  </Box>
);

export default ProductCard;
