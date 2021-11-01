import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { fetchMovies, fetchMovie } from "../../actions/movie_actions";
import { fetchGenres } from "../../actions/genre_actions";

const mSTP = state => {
    const movies = [];
    Object.values(state.entities.movies).forEach(movie => {
        movies[movie.id] = movie;
    })
    return {
        movies: movies,
        genres: Object.values(state.entities.genres)
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: movieId => dispatch(fetchMovie(movieId)),
        fetchGenres: () => dispatch(fetchGenres())
    }
};

export default connect(mSTP, mDTP)(MovieIndex);