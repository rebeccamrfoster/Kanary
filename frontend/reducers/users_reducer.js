import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_WATCHLIST, REMOVE_WATCHLIST } from "../actions/watchlist_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_WATCHLIST:
            nextState[action.watchlist.user_id].movieIds.push(action.watchlist.movie_id);
            return nextState;
        case REMOVE_WATCHLIST:
            let { user_id, movie_id } = action.watchlist;
            let movieIds = nextState[user_id].movieIds;
            movieIds.splice(movieIds.indexOf(movie_id), 1);

            nextState[user_id].movieIds = movieIds;
            return nextState;
        default:
            return oldState;
    }
};

export default usersReducer;