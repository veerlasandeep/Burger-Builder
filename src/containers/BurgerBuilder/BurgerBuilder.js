import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxilary/Auxilary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const Ingerdients_Cost = {
  salad: 0.4,
  meat: 0.7,
  bacon: 0.6,
  cheese: 0.9,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    orderSummaryClick: false,
    spinLoader: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://react-burger-a2989-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        this.setState({ ingredients: response.data });
      });
  }

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
    /* this.setState({ spinLoader: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: "Sandeep",
        country: "India",
      },
      summary: "Fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ spinLoader: false, orderSummaryClick: false });
      })
      .catch((error) => {
        this.setState({ spinLoader: false, orderSummaryClick: false });
      }); */
      const queryParam = [];
      for(let i in this.state.ingredients){
        queryParam.push(encodeURIComponent(i) + '=' +encodeURIComponent(this.state.ingredients[i]));
      }
      const queryString = queryParam.join('&');
      this.props.history.push({
        pathname : '/checkout',
        search : '?'+queryString
      });
  };

  render() {
    const disabledButton = {
      ...this.state.ingredients,
    };

    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0;
    }

    let orderSummary = null;
    let defaultIngredients = <Spinner />;
    if (this.state.ingredients) {
      defaultIngredients = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          closeModel={this.closeModelHandler}
          continueButton={this.continueButtonHandler}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.spinLoader) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.orderSummaryClick}
          closeModel={this.closeModelHandler}
        >
          {orderSummary}
        </Modal>
        {defaultIngredients}
      </Aux>
    );
  }
}

export default BurgerBuilder;
