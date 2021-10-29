import * as SessionApiUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => {
    debugger
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    }
};

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const removeErrors = () => {
    return {
        type: REMOVE_SESSION_ERRORS
    }
}

export const createUser = user => dispatch => {
    return SessionApiUtil.createUser(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const createSession = user => dispatch => {
    return SessionApiUtil.createSession(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const deleteSession = () => dispatch => {
    return SessionApiUtil.deleteSession()
        .then(dispatch(removeCurrentUser()))
};