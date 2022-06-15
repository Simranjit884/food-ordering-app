import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import { Fragment, useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCntxt = useContext(CartContext);
  const totalAmount = `$${cartCntxt.totalAmount.toFixed(2)}`;
  const hasItems = cartCntxt.items.length;

  const addItemToCartHandler = (item) => {
    let newItem = { ...item, amount: 1 };
    cartCntxt.addItem(newItem);
  };

  const removeItemFromCartHandler = (id) => {
    cartCntxt.removeItem(id);
  };

  const onOrderClick = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://react-http-32f2a-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCntxt.items,
        }),
      }
    );

    if (response.ok) {
      setIsSubmitting(false);
      setDidSubmit(true);
    }
  };

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

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems > 0 && (
        <button className={classes.button} onClick={onOrderClick}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onClose={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Senging order data....</p>;
  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
