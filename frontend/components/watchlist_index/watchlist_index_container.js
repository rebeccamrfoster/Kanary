import { connect } from "react-redux";
import WatchlistIndex from "./watchlist_index";
import { fetchWatchlists } from "../../actions/watchlist_actions";
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
        fetchWatchlists: () => dispatch(fetchWatchlists()),
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie)),
        formattedDate: timestamp => formattedDate(timestamp)
    }
};

export default connect(mSTP, mDTP)(WatchlistIndex);