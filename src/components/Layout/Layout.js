import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
const layout = props => (
  <Aux>
    <div className={classes.Content}>ToolBar, SideBar, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
