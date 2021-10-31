import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../utils/session_api_util";

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

export default connect(mSTP, mDTP)(Navbar);