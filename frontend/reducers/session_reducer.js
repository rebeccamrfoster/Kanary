import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";

const _nullSession = Object.freeze({
    currentUserId: null
});

const sessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUserId: action.currentUser.id };
        case REMOVE_CURRENT_USER:
            return _nullSession;
        default:
            return oldState;
    }
};

export default sessionReducer;