import { connect } from "react-redux";
import { fetchWatchlists } from "../../actions/watchlist_actions";
import WatchlistIndex from "./watchlist_index";
import { fetchMovies } from "../../actions/movie_actions";
import { handleWatchlist } from "../../actions/watchlist_actions";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        movies: state.entities.movies
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
    }
};

export default connect(mSTP, mDTP)(WatchlistIndex);