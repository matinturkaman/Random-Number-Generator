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
import Toast from "../toast/toast";

const Random = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);

  const randomHandler = () => {
    setCount(Math.floor(Math.random() * min));
  };

  const ChangeHandler = (e) => {
    setMin(e);
  };

  return (
    <div>
      {min <= 1 ? <Toast /> : null}
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
