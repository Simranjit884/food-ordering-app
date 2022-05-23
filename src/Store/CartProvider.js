import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedItem = state.items.concat(action.item);
    const UpdatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItem,
      totalAmount: UpdatedTotalAmount
    };
  }
  return defaultCartState;
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
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
