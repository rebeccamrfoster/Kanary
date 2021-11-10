import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";
import { fetchGenres } from "../../actions/genre_actions";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        genres: Object.values(state.entities.genres)
    }
};

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchGenres: () => dispatch(fetchGenres())
    }
};

export default withRouter(connect(mSTP, mDTP)(Navbar));