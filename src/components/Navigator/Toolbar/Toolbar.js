import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawToggle clicked={props.clicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems /> 
    </nav>
  </header>
);

export default toolbar;
