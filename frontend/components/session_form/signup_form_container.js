import { connect } from "react-redux";
import SessionForm from "./session_form";
import { createUser, removeErrors } from "../../actions/session_actions";

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: "SIGN UP"
    }
};

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(createUser(user)),
        clearErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(SessionForm);