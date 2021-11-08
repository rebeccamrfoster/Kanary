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

export const handleWatchlist = (user, movie) => dispatch => {
    const watchlist = { user_id: user.id, movie_id: movie.id }
    
    if (user.movieIds.includes(movie.id)) {
        return WatchlistApiUtil.deleteWatchlist(watchlist)
            .then(watchlist => dispatch(removeWatchlist(watchlist)))
    }
    else {
        return WatchlistApiUtil.createWatchlist(watchlist)
            .then(watchlist => dispatch(receiveWatchlist(watchlist)))
    }
};