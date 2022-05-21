import CartContext from "./cart-context";

const CardProvider = (props) => {
    const addCartItemHandler = () => {};

    const removeCartItemHandler = () => {};

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

export default CardProvider;
