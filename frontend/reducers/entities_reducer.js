import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import moviesReducer from "./movies_reducer";
import genresReducer from "./genres_reducer";
import watchlistsReducer from "./watchlists_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer,
    watchlists: watchlistsReducer
});

export default entitiesReducer;