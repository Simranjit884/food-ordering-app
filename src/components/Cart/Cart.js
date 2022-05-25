import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from '../../Store/cart-context';
import { useContext } from "react/cjs/react.production.min";

const Cart = (props) => {
  const cartCntxt = useContext(CartContext);
  const totalAmount = `$${cartCntxt.totalAmount}`;

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
