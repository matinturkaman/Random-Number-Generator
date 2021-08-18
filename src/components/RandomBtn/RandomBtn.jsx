import React from "react";

const RandomBtn = (props) => {
  return (
    <div>
      <button onClick={props.randomHandler} id="generate">
        generate
      </button>
    </div>
  );
};

export default RandomBtn;
