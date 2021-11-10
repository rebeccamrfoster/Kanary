import { connect } from "react-redux";
import { withRouter } from "react-router";
import SearchResultIndex from "./search_result_index";
import { selectMoviesBySearch } from "../../../utils/movie_selector";
import { fetchMovies } from "../../../actions/movie_actions";
import { fetchGenres } from "../../../actions/genre_actions";

const mSTP = (state, ownProps) => {
    return {
        movies: state.entities.movies,
        genres: state.entities.genres,
        query: ownProps.match.params.query
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchGenres: () => dispatch(fetchGenres()),
        selectMoviesBySearch: (movies, genres, query) => (
            selectMoviesBySearch(movies, genres, query)
        )
    }
};

export default withRouter(connect(mSTP, mDTP)(SearchResultIndex));