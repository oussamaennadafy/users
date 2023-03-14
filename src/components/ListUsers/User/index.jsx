import React from "react";
import classes from "./User.module.css";

function User({ userName, age }) {
  return <li className={classes.item}>{`${userName} (${age} years old)`}</li>;
}

export default User;
