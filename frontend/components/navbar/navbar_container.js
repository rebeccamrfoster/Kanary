import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default withRouter(connect(mSTP, mDTP)(Navbar));