import CartSidebar from "../components/ui/cartSidebar/CartSidebar";
import { connect } from "react-redux";
import { toggleCart } from "../redux/actions/cartActions";

const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
