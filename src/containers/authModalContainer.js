import AuthModal from "../components/ui/authModal/AuthModal";
import { connect } from "react-redux";
import { toggleAuthModal } from "../redux/actions/authActions";

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) => ({
  toggleAuthModal: () => dispatch(toggleAuthModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
