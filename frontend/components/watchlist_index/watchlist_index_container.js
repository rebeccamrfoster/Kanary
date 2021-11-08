import { connect } from "react-redux";
import WatchlistIndex from "./watchlist_index";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        watchlists: Object.values(state.entities.watchlists)
    }
};

const mDTP = dispatch => {
    return {

    }
};

export default connect(mSTP, mDTP)(WatchlistIndex);