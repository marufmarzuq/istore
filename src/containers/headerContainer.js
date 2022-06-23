import Header from "../components/ui/header/Header";
import { connect } from "react-redux";
import { toggleCart } from "../redux/actions/cartActions";
import { toggleAuthModal } from "../redux/actions/authActions";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  toggleAuthModal: () => dispatch(toggleAuthModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
