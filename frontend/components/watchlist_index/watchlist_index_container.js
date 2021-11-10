import { connect } from "react-redux";
import { fetchWatchlists } from "../../actions/watchlist_actions";
import WatchlistIndex from "./watchlist_index";
import { fetchMovies } from "../../actions/movie_actions";
import { handleWatchlist } from "../../actions/watchlist_actions";
import { formattedDate } from "../../utils/date_util";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        movies: state.entities.movies,
        watchlists: state.entities.watchlists
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchWatchlists: () => dispatch(fetchWatchlists()),
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie)),
        formattedDate: timestamp => formattedDate(timestamp)
    }
};

export default connect(mSTP, mDTP)(WatchlistIndex);