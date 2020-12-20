import React, { useState } from "react";
import Box from "@material-ui/core/Box";

import Loader from "../../components/loader";
import HeaderPanel from "../../components/header-panel";
import ProductCard from "../../components/product-card";
import "./catalog.scss";

// TODO: replace with api call
// TODO: update the 'displayedItems'
const items = [
  {
    id: 0,
    name: "Клавиатура Apple Magic Keyboard RU+Numeric Keypad (White) MQ052RS/A",
    price: "5199",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/0/d/0d3b423126eedb0a1e72941da3a25c91.jpg",
  },
  {
    id: 1,
    name: "Клавиатура Apple Magic Keyboard RU (Space Grey) MRMH2",
    price: "5399",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/d/a/daaeb5392dd2597f0aeeee0cbfe6a6bf.jpg",
  },
  {
    id: 2,
    name: "Клавиатура игровая GamePro GK1500 (Black)",
    price: "1499",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/c/1/c176df3bf68359eca64da298ded8689e.jpg",
  },
  {
    id: 3,
    name: "Клавиатура Apple Magic Keyboard RU (White) AP-MLA22RU/A",
    price: "4999",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/e/4/e4a54aaf283b3662b4af644f5bdd9ce8.jpg",
    discount: "3999",
  },
  {
    id: 4,
    name:
      "Игровая клавиатура Razer Mercury Edition Purple Switch (RZ03-03390300-R3M1)",
    price: "3499",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/a/d/ad7d3fcd33d7f27d7a257e4cef82bd94.jpg",
    discount: "2999",
  },
  {
    id: 5,
    name:
      "Игровая клавиатура Razer Black Widow X Chroma Mercury Edition (RZ03-01762000-R3M1)",
    price: "3199",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/1/f/1fc1d398a0c00dc193d119ce0ff46e35.jpg",
    discount: "2999",
  },
  {
    id: 6,
    name:
      "Игровая клавиатура Razer Huntsman mini Red Switch (RZ03-03390200-R3M1)",
    price: "3999",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/0/1/014ad9203cae6644956356a7b580dc63.jpg",
  },
  {
    id: 7,
    name:
      "Игровая клавиатура Razer Huntsman mini Purple Switch (RZ03-03390100-R3M1)",
    price: "3199",
    img:
      "https://i.citrus.ua/imgcache/size_800/uploads/shop/0/1/014ad9203cae6644956356a7b580dc63.jpg",
    discount: "3799",
  },
  {
    id: -1,
    name: "Lorem Ipsum Dolor Sit Amet",
    price: "18650",
  },
];

const CatalogPage = ({ appName }) => {
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [displayedItems, setDisplayedItems] = useState(items);

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

  const handleSearchAction = (event) => {
    let searchPattern = event.target.value.toLowerCase();
    console.log(searchPattern);

    if (items) {
      setDisplayedItems(
        items.filter((x) => x.name.toLowerCase().includes(searchPattern))
      );
    }
  };

  const handleAddToCartAction = () => {
    console.log("add to cart");
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

  return (
    <>
      <HeaderPanel
        text={appName}
        categories={categories}
        brands={brands}
        categorySelection={handleCategorySelection}
        brandSelection={handleBrandSelection}
        searchAction={handleSearchAction}
      />
      <Box id="catalog-page">
        {items ? (
          <Box id="catalog-container">
            {displayedItems.map((item) => (
              <ProductCard
                key={item.id}
                addToCartAction={handleAddToCartAction}
                {...item}
              />
            ))}
          </Box>
        ) : (
          <Loader message="Loading components..." />
        )}
      </Box>
    </>
  );
};

export default CatalogPage;
