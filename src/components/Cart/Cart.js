const Cart = (props) => {
  const cartitems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      cartitems
      <div>
        <span>Total Amount</span>
        <span>35.65</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default Cart;
