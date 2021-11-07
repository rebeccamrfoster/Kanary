import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login, removeErrors, SIGN_UP } from "../../actions/session_actions";

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: SIGN_UP
    }
};

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        demoLogin: user => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm);