import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

const burger = (props) => {
  let trackedIngredients = Object.keys(props.ingredients)
    .map((inKey) => {
      return [...Array(props.ingredients[inKey])].map((_, i) => {
        return <BurgerIngredient key={inKey + i} type={inKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if(trackedIngredients.length === 0){
        trackedIngredients = <p>Please add ingredients</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {trackedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
