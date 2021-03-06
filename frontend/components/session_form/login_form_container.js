import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, removeErrors, LOG_IN } from "../../actions/session_actions";

const mSTP = state => ({
    errors: state.errors.session,
    formType: LOG_IN
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);