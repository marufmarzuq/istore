import Header from "../components/ui/header/Header";
import { connect } from "react-redux";
import { toggleCart } from "../redux/actions/cartActions";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
