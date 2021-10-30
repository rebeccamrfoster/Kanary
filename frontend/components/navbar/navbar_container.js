import { connect } from "react-redux";
import Navbar from "./navbar";
import { deleteSession } from "../../utils/session_api_util";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mDTP = dispatch => {
    return {
        deleteSession: () => dispatch(deleteSession())
    }
};

export default connect(mSTP, mDTP)(Navbar);