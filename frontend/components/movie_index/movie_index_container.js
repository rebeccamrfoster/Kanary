import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { handleWatchlist } from "../../actions/watchlist_actions";

import { withRouter } from "react-router";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        movies: state.entities.movies,
        genres: Object.values(state.entities.genres),
    }
};

const mDTP = dispatch => {
    return {
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
    }
};

export default withRouter(connect(mSTP, mDTP)(MovieIndex));