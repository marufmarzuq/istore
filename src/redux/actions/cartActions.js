import { TOGGLE_CART } from "../consts/cartTypes";

const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export { toggleCart };
