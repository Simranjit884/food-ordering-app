import classes from './Modal.module.css';

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
  return <div></div>;
};

export default Modal;
