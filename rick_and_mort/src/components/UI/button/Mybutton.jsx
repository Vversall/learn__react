import React from "react";
import classes from "./Mybutton.module.css";

const Mybutton = ({ children, isActive, ...props }) => {
  const classList = `${classes.myBtn} ${isActive ? "active" : ""}`;
  return (
    <button {...props} className={classList}>
      {children}
    </button>
  );
};

export default Mybutton;