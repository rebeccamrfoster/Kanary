import { connect } from "react-redux";
import { withRouter } from "react-router";
import SearchResultIndex from "./search_result_index";
import { selectMoviesBySearch } from "../../../utils/movie_selector";

const mSTP = (state, ownProps) => {
    return {
        movies: state.entities.movies,
        genres: state.entities.genres,
        query: ownProps.match.params.query
    }
};

const mDTP = dispatch => {
    return {
        selectMoviesBySearch: (movies, genres, query) => (
            selectMoviesBySearch(movies, genres, query)
        )
    }
};

export default withRouter(connect(mSTP, mDTP)(SearchResultIndex));