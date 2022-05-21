import CartIcon from "../Cart/CardIcon";
import classes from "./HeaderCardButton.module.css";
import { useContext } from "react";
import CardContext from "../../Store/cart-context";

const HeaderCardButton = (props) => {
  const cartCntxt = useContext(CardContext);
  const numberOfCartItems = cartCntxt.items.reduce((TotalSum, item) => {
    return TotalSum + item;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
