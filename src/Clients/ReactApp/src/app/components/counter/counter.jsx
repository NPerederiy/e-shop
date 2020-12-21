import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";

import "./counter.scss";

const Counter = ({ count = 1, id, increase, decrease }) => {
  return (
    <Box>
      <Button
        className="counter-button"
        disabled={count === 1}
        onClick={() => count >= 1 && decrease(id)}
      >
        -
      </Button>
      <TextField
        className="counter-text-field"
        variant="outlined"
        value={count}
      />
      <Button
        className="counter-button"
        onClick={() => count >= 1 && increase(id)}
      >
        +
      </Button>
    </Box>
  );
};

export default Counter;
