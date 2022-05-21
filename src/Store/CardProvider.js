import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = {
  item: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addCartItemHandler = (item) => {
      dispatchCartAction({type: 'ADD', item:item});
    };

    const removeCartItemHandler = (id) => {
      dispatchCartAction({type: 'REMOVE', id:id})
    };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
