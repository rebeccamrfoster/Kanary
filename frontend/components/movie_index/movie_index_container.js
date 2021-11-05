import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { fetchMovies } from "../../actions/movie_actions";
import { fetchGenres } from "../../actions/genre_actions";
import { createWatchlist, deleteWatchlist } from "../../actions/watchlist_actions";

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
        createWatchlist: watchlist => dispatch(createWatchlist(watchlist)),
        deleteWatchlist: watchlistId => dispatch(deleteWatchlist(watchlistId))
    }
};

export default connect(mSTP, mDTP)(MovieIndex);