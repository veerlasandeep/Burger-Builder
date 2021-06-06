import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxilary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const Ingerdients_Cost = {
  salad: 0.4,
  meat: 0.7,
  bacon: 0.6,
  cheese: 0.9,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: 0,
    purchasable: false,
    orderSummaryClick: false,
  };

  oredrIngredients(ingredients) {
    const sum = Object.keys(ingredients)
      .map((inKey) => {
        return ingredients[inKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientsListner = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const prices = Ingerdients_Cost[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = prices + oldPrice;
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    this.oredrIngredients(updatedIngredients);
  };

  removeIngredientListner = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const price = Ingerdients_Cost[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - price;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.oredrIngredients(updatedIngredients);
  };

  orderSummaryHandler = () => {
    this.setState({ orderSummaryClick: true });
  };

  closeModelHandler = () => {
    this.setState({ orderSummaryClick: false });
  };

  continueButtonHandler = () => {
    alert("success");
  };

  render() {
    const disabledButton = {
      ...this.state.ingredients,
    };

    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.orderSummaryClick}
          closeModel={this.closeModelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            closeModel={this.closeModelHandler}
            continueButton={this.continueButtonHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addedIngredients={this.addIngredientsListner}
          deleteIngredients={this.removeIngredientListner}
          disabledKey={disabledButton}
          totaiPrice={this.state.totalPrice}
          oredrIngredients={this.state.purchasable}
          click={this.orderSummaryHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
