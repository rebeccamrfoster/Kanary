import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { fetchMovies, fetchMovie } from "../../actions/movie_actions";
import { fetchGenres } from "../../actions/genre_actions";
import { fetchWatchlists, createWatchlist, deleteWatchlist } from "../../actions/watchlist_actions";

const mSTP = state => {
    const movies = [];
    Object.values(state.entities.movies).forEach(movie => {
        movies[movie.id] = movie;
    })
    return {
        movies: movies,
        genres: Object.values(state.entities.genres),
        watchlists: Object.values(state.entities.watchlists),
        currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: movieId => dispatch(fetchMovie(movieId)),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchWatchlists: () => dispatch(fetchWatchlists()),
        createWatchlist: watchlist => dispatch(createWatchlist(watchlist)),
        deleteWatchlist: watchlistId => dispatch(deleteWatchlist(watchlistId))
    }
};

export default connect(mSTP, mDTP)(MovieIndex);