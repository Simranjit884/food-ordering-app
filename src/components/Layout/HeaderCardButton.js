import CartIcon from "../Cart/CardIcon";

const HeaderCardButton = (props) => {
  return (
    <button>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCardButton;
