import { connect } from "react-redux";
import SessionForm from "./session_form";
import { createSession, removeErrors } from "../../actions/session_actions";

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: "LOG IN"
    }
};

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(createSession(user)),
        clearErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm);