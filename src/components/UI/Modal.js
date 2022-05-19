import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const OverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const elementPortal = document.getElementById("overlay");
  return (
    <Fragment>
      {createPortal(<BackDrop />, elementPortal)}
      {createPortal(<OverLay>{props.children}</OverLay>, elementPortal)}
    </Fragment>
  );
};

export default Modal;
