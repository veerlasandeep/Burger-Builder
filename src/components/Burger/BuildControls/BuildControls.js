import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price : $ <strong>{props.totaiPrice.toFixed(2)}</strong>
    </p>
    {controls.map((cntl) => (
      <BuildControl
        label={cntl.label}
        key={cntl.label}
        addIngredients={() => props.addedIngredients(cntl.type)}
        deleteIngredient={() => props.deleteIngredients(cntl.type)}
        disabledButton={props.disabledKey[cntl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.oredrIngredients}
      onClick={props.click}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
