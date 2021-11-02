import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_WATCHLIST } from "../actions/watchlist_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_WATCHLIST:
            const { user_id, movie_id } = action.watchlist;
            nextState[user_id].movieIds.push(movie_id);
            return nextState;
        default:
            return oldState;
    }
};

export default usersReducer;