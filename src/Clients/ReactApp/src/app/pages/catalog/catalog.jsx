import React, { useState } from "react";
import Box from "@material-ui/core/Box";

import Loader from "../../components/loader";
import HeaderPanel from "../../components/header-panel";
import ProductCard from "../../components/product-card";
import "./catalog.scss";

const CatalogPage = (props) => {
  const {
    appName,
    handlelogOut,
    isFatching,
    catalog,
    displayedItems,
    setDisplayedItems,
    handleAddToCartAction,
  } = props;
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();

  const handleCategorySelection = (event) => {
    console.log(`id: ${event.target.id} category: ${event.target.innerText}`);
    setCategory(event.target.id);
    console.log(category);

    // TODO: Display by category
  };

  const handleBrandSelection = (event) => {
    console.log(`id: ${event.target.id} brand: ${event.target.innerText}`);
    setBrand(event.target.id);
    console.log(brand);

    // TODO: Filter by brand
  };

  const handleuserMenuSelection = (event) => {
    if (event.target.innerText === "Sign Out") {
      handlelogOut();
    }
  };

  const handleSearchAction = (event) => {
    let searchPattern = event.target.value.toLowerCase();
    console.log(searchPattern);

    if (catalog) {
      setDisplayedItems(
        catalog.filter((x) => x.name.toLowerCase().includes(searchPattern))
      );
    }
  };

  const categories = [
    {
      id: 1,
      name: "Keyboards",
    },
    {
      id: 2,
      name: "Mice",
    },
    {
      id: 3,
      name: "Mice accessories",
    },
  ];

  const brands = [
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "GamePro",
    },
    {
      id: 3,
      name: "Razer",
    },
  ];
  const userMenu = [
    {
      id: 1,
      name: "Тест",
    },
    {
      id: 2,
      name: "Management",
    },
    {
      id: 3,
      name: "Sign Out",
    },
  ];

  return (
    <>
      <HeaderPanel
        text={appName}
        categories={categories}
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
