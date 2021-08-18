import React, { useEffect, useRef, useState } from "react";
import RandomBtn from "../RandomBtn/RandomBtn";
import ShowRandom from "../ShowRandomNumber/ShowRandom";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Random = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);

  const randomHandler = () => {
    setCount(Math.floor(Math.random() * min));
    if (count === 1 || 0) {
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>error</AlertTitle>
        <AlertDescription>what do you doing</AlertDescription>
      </Alert>;
    }
  };

  const ChangeHandler = (e) => {
    setMin(e);
  };

  return (
    <div>
      <ShowRandom count={count} />
      <div id="container">
        <NumberInput
          onChange={ChangeHandler}
          defaultValue={1}
          id="number-input"
          min={1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper id="increment" />
            <NumberDecrementStepper id="decrement" />
          </NumberInputStepper>
        </NumberInput>
        <RandomBtn randomHandler={randomHandler} />
      </div>
    </div>
  );
};

export default Random;
