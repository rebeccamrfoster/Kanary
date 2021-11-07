import { RECEIVE_ALL_GENRES, RECEIVE_GENRE } from "../actions/genre_actions";

const genresReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_GENRES:
            nextState = action.genres;
            return nextState;
        case RECEIVE_GENRE:
            nextState[action.genre.id] = action.genre;
            return nextState;
        default:
            return oldState;
    }
};

export default genresReducer;