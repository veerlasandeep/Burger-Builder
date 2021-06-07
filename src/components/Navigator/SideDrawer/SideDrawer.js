import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Aux from "../../../hoc/Auxilary/Auxilary";
import BackDrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let propsClass = [classes.SideDrawer, classes.Close];
  if (props.show) {
    propsClass = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.show} closeModel={props.clicked} />
      <div className={propsClass.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div> 
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
