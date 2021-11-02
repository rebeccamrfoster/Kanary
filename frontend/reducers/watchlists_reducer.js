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
        case REMOVE_WATCHLIST:
            delete nextState[action.watchlistId];
            return nextState;
        default:
            return oldState;
    }
};

export default watchlistsReducer;