import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCntxt = useContext(CartContext);
  const totalAmount = `$${cartCntxt.totalAmount.toFixed(2)}`;
  const hasItems = cartCntxt.items.length;
  
  const addItemToCartHandler = (item) => {
    let newItem = {...item, amount: 1};
    cartCntxt.addItem(newItem);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCntxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemToCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        />
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
        {hasItems > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
