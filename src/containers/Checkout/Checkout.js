import React, { Component } from "react";

import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    for (let param of query.entries()) {
      console.log("param" + param);
      ingredient[param[0]] = +param[1];
      console.log(ingredient);
    }
    this.setState({ ingredients: ingredient });
    console.log(this.state.ingredients);
  }

  checkoutCancelledHandler = () => {
    console.log("helooooooooo");
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={()=> (<ContactData ingredients={this.state.ingredients}/>)}
        />
      </div>
    );
  }
}

export default Checkout;
