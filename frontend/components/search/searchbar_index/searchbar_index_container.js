import { connect } from "react-redux";
import { withRouter } from "react-router";
import SearchbarIndex from "./searchbar_index";
import { selectMoviesBySearch } from "../../../utils/movie_selector";

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

export default withRouter(connect(mSTP, mDTP)(SearchbarIndex));