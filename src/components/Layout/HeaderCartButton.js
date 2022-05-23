import CartIcon from "../Cart/CardIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCntxt = useContext(CartContext);
  const numberOfCartItems = cartCntxt.items.reduce((TotalSum, item) => {
    return TotalSum + item.amount;
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

export default HeaderCartButton;
