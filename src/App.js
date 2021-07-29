import React, { Component } from "react";
import {Route} from 'react-router-dom'

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
// import ContactData from "./containers/Checkout/ContactData/ContactData";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/checkout" exact component={Checkout}/>
          {/* <Route path="/contact-data" exact component={ContactData}/> */}
        </Layout>
      </div>
    );
  }
}

export default App;// This is for testing
