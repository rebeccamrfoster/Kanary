import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { fetchMovies } from "../../actions/movie_actions";
import { fetchGenres } from "../../actions/genre_actions";
import { handleWatchlist } from "../../actions/watchlist_actions";

import { withRouter } from "react-router";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        movies: state.entities.movies,
        genres: Object.values(state.entities.genres),
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchGenres: () => dispatch(fetchGenres()),
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
    }
};

export default withRouter(connect(mSTP, mDTP)(MovieIndex));