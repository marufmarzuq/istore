import { TOGGLE_CART } from "../consts/cartTypes";
const initialState = {
  openCart: false,
  totalItem: 0,
  items: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        openCart: !state.openCart,
      };

    default:
      return state;
  }
};

export default cart;
