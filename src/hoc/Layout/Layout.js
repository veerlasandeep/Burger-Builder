import React, { Component } from "react";

import Aux from "../Auxilary/Auxilary";
import Toolbar from "../../components/Navigator/Toolbar/Toolbar";
import classes from "./Layout.css";
import SideDrawer from "../../components/Navigator/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    backDropClose: false,
  };
  backDropCloseHandler = () => this.setState({ backDropClose: false });

  menuTogglerHandler = () =>
    this.setState((prevState) => {
      return { backDropClose: !prevState.backDropClose };
    });
  render() {
    return (
      <Aux>
        <Toolbar clicked={this.menuTogglerHandler}/>
        <SideDrawer
          show={this.state.backDropClose}
          clicked={this.backDropCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
