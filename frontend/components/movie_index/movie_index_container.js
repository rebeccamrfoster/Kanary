import { connect } from "react-redux";
import MovieIndex from "./movie_index";
import { requestMovies, requestMovie } from "../../actions/movie_actions";

const mSTP = state => {
    return {
        movies: Object.values(state.entities.movies)
    }
};

const mDTP = dispatch => {
    return {
        requestMovies: () => dispatch(requestMovies()),
        requestMovie: movieId => dispatch(requestMovie(movieId))
    }
};

export default connect(mSTP, mDTP)(MovieIndex);