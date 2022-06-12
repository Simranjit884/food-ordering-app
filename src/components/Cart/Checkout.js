const Checkout = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button>Confirm</button>
      <button type="button" onClick={props.onClose}>Cancel</button> 
    </form>
  );
};

export default Checkout;
