import { connect } from "react-redux";
import { withRouter } from "react-router";
import SearchbarIndex from "./searchbar_index";
import { fetchMovies } from "../../../actions/movie_actions";
import { selectMoviesBySearch } from "../../../utils/movie_selector";

const mSTP = state => {
    return {
        movies: state.entities.movies,
        genres: state.entities.genres
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        selectMoviesBySearch: (movies, genres, query) => (
            selectMoviesBySearch(movies, genres, query)
        )
    }
};

export default withRouter(connect(mSTP, mDTP)(SearchbarIndex));