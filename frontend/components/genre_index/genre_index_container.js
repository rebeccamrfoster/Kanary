import { connect } from "react-redux";
import { fetchGenre } from "../../actions/genre_actions";
import { fetchMovies } from "../../actions/movie_actions";
import GenreIndex from "./genre_index";

const mSTP = (state, ownProps) => {
    return {
        genre: state.entities.genres[ownProps.match.params.genreId],
        movies: state.entities.movies
    }
};

const mDTP = dispatch => {
    return {
        fetchGenre: genreId => dispatch(fetchGenre(genreId)),
        fetchMovies: () => dispatch(fetchMovies())
    }
};

export default connect(mSTP, mDTP)(GenreIndex);