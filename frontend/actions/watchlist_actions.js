import * as WatchlistApiUtil from "../utils/watchlist_api_util";

export const RECEIVE_ALL_WATCHLISTS = "RECEIVE_ALL_WATCHLISTS";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";
export const REMOVE_WATCHLIST = "REMOVE_WATCHLIST";

const receiveWatchlists = watchlists => {
    return {
        type: RECEIVE_ALL_WATCHLISTS,
        watchlists
    }
};

const receiveWatchlist = watchlist => {
    return {
        type: RECEIVE_WATCHLIST,
        watchlist
    }
};

const removeWatchlist = watchlist => {
    return {
        type: REMOVE_WATCHLIST,
        watchlist
    }
};

export const fetchWatchlists = () => dispatch => {
    return WatchlistApiUtil.fetchWatchlists()
        .then(watchlists => dispatch(receiveWatchlists(watchlists)))
};

export const createWatchlist = watchlist => dispatch => {
    return WatchlistApiUtil.createWatchlist(watchlist)
        .then(watchlist => dispatch(receiveWatchlist(watchlist)))
};

export const deleteWatchlist = watchlist => dispatch => {
    return WatchlistApiUtil.deleteWatchlist(watchlist)
        .then(dispatch(removeWatchlist(watchlist)))
}