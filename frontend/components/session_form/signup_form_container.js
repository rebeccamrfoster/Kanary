import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login, removeErrors, SIGN_UP } from "../../actions/session_actions";

const mSTP = state => ({
    errors: state.errors.session,
    formType: SIGN_UP
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    demoLogin: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);