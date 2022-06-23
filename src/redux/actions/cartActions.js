import { TOGGLE_CART } from "../consts/cartTypes";

const toggleCart = () => {
  console.log("Clicked");
  return {
    type: TOGGLE_CART,
  };
};

export { toggleCart };
