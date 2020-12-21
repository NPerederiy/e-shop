import React from "react";
import { useDispatch } from "react-redux";

import Counter from "./counter";
import {
  increaseCount,
  decreaseCount,
} from "../../../redux/actions/basket.action";

const CounterContainer = (props) => {
  const dispatch = useDispatch();

  const increase = (id) => {
    dispatch(increaseCount(id));
  };

  const decrease = (id) => {
    dispatch(decreaseCount(id));
  };

  return <Counter increase={increase} decrease={decrease} {...props} />;
};

export default CounterContainer;
