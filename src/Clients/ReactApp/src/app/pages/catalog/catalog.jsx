import React from "react";
import Box from "@material-ui/core/Box";

import Loader from "../../components/loader";
import HeaderPanel from "../../components/header-panel";
import ProductCard from "../../components/product-card";
import { brands, types, userMenu } from "../../../constants/misc.constants";
import "./catalog.scss";

const CatalogPage = (props) => {
  const {
    appName,
    handlelogOut,
    isFatching,
    displayedItems,
    setDisplayedItems,
    handleAddToCartAction,
    handleBrandSelection,
    handleCategorySelection,
    history,
  } = props;

  const handleuserMenuSelection = (event) => {
    if (event.target.innerText === "Sign Out") {
      handlelogOut();
    }
    if (event.target.innerText === "Management") {
      history.push("/management");
    }
  };

  const handleSearchAction = (event) => {
    let searchPattern = event.target.value.toLowerCase();

    if (displayedItems) {
      setDisplayedItems(
        displayedItems.filter((x) =>
          x.name.toLowerCase().includes(searchPattern)
        )
      );
    }
  };

  return (
    <>
      <HeaderPanel
        text={appName}
        categories={types}
        brands={brands}
        userMenu={userMenu}
        userMenuSelection={handleuserMenuSelection}
        categorySelection={handleCategorySelection}
        brandSelection={handleBrandSelection}
        searchAction={handleSearchAction}
      />
      <Box id="catalog-page">
        {isFatching ? (
          <Loader message="Loading components..." />
        ) : (
          <Box id="catalog-container">
            {displayedItems.map((item) => (
              <ProductCard
                key={item.id}
                addToCartAction={() => {
                  handleAddToCartAction({ ...item, count: 1 });
                }}
                {...item}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CatalogPage;
