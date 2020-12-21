import {
  FETCH_APPLICATION_DATA,
  UPDATE_APPLICATION_DATA,
  FAILURE_RECEIVE_APPLICATION_DATA,
} from "../types/applicationData.types";

const mocItems = [
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

const requestApplicationData = () => ({
  type: FETCH_APPLICATION_DATA,
});

export const updateApplicationData = (data) => ({
  type: UPDATE_APPLICATION_DATA,
  payload: data,
});

const failureReceiveApplicationData = (err) => ({
  type: FAILURE_RECEIVE_APPLICATION_DATA,
  payload: err,
});

export const fetchDashboardData = () => async (dispatch) => {
  dispatch(requestApplicationData());

  try {
    // const data = await getData();

    setTimeout(() => {
      dispatch(updateApplicationData(mocItems));
    }, 2000);
  } catch (error) {
    dispatch(failureReceiveApplicationData(error));
  }
};
