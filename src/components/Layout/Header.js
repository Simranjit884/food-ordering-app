import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
