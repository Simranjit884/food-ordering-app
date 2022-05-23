import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const cartInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = cartInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber.length < 1 ||
      enteredAmountNumber > 5
    ) {
      setFormIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={cartInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!formIsValid && <p>Please enter a valid Amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
