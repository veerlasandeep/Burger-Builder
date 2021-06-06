import React from "react";

import Aux from "../../hoc/Auxilary";
import Toolbar from '../Navigator/Toolbar/Toolbar'
import classes from "./Layout.css";
import SideDrawer from '../Navigator/SideDrawer/SideDrawer'

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
