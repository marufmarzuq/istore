import { TOGGLE_AUTH_MODAL } from "../consts/authTypes";

const initialState = {
  openAuthModal: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH_MODAL:
      return {
        ...state,
        openAuthModal: !state.openAuthModal,
      };

    default:
      return state;
  }
};

export default auth;
