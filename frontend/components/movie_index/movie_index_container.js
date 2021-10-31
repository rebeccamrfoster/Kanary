import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { fetchMovies, fetchMovie } from "../../actions/movie_actions";

const mSTP = state => {
    return {
        movies: Object.values(state.entities.movies)
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: movieId => dispatch(fetchMovie(movieId))
    }
};

export default connect(mSTP, mDTP)(MovieIndex);