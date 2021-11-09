import { connect } from "react-redux";
import { withRouter } from "react-router";
import SearchIndex from "./search_index";
import { selectMoviesBySearch, selectMoviesByGenre } from "../../utils/movie_selector";

const mSTP = (state, ownProps) => {
    return {
        // movies: selectMoviesBySearch(state, ownProps.match.params.query)
        movies: state.entities.movies,
        genres: state.entities.genres
    }
};

const mDTP = state => {
    return {
        selectMoviesBySearch: (movies, genres, query) => (
            selectMoviesBySearch(movies, genres, query)
        )
    }
};

export default withRouter(connect(mSTP, mDTP)(SearchIndex));