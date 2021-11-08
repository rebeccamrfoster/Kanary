import {
    RECEIVE_ALL_WATCHLISTS,
    RECEIVE_WATCHLIST,
    REMOVE_WATCHLIST
} from "../actions/watchlist_actions";

const watchlistsReducer = (oldState = {}, action) => {
    Object.freeze(action.type);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_WATCHLISTS:
            nextState = action.watchlists;
            return nextState;
        case RECEIVE_WATCHLIST:
            nextState[action.watchlist.id] = action.watchlist;
            return nextState;
        case REMOVE_WATCHLIST:
            const watchlists = Object.values(nextState);
            if (watchlists.length === 0) return {};

            const toRemove = watchlists.find(watchlist => (
                watchlist.user_id === action.watchlist.user_id &&
                watchlist.movie_id === action.watchlist.movie_id
            ));
            delete nextState[toRemove.id];
            return nextState;
        default:
            return oldState;
    }
};

export default watchlistsReducer;