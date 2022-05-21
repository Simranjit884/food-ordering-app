import cartContext from "./cart-context";

const CardProvider = (props) => {
  return (
    <cartContext.Provider value={Card}>{props.children}</cartContext.Provider>
  );
};

export default CardProvider;
