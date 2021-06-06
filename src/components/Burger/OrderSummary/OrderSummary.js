import React from "react";

import Aux from "../../../hoc/Auxilary";
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const orderSummary = Object.keys(props.ingredients).map((inkey) => {
    return (
      <li key={inkey}>
        <span style={{ textTransform: "capitalize" }}>{inkey}</span> :{" "}
        {props.ingredients[inkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Order Summary</h3>
      <ul>{orderSummary}</ul>
      <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
      <Button btnType="Danger" btnClicked={props.closeModel}>Cancel</Button>
      <Button btnType="Success" btnClicked={props.continueButton}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;
