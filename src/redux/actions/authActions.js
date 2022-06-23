import { TOGGLE_AUTH_MODAL } from "../consts/authTypes";

const toggleAuthModal = () => {
  return {
    type: TOGGLE_AUTH_MODAL,
  };
};

export { toggleAuthModal };
