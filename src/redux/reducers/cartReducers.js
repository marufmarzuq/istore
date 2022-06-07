import { OPEN } from "../consts/cartTypes";
const initialState = {
  openCart: false,
};

const openCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        openCart: true,
      };
    case CLOSE:
      return {
        ...state,
        openCart: false,
      };

    default:
      return state;
  }
};

export default openCartReducer;
