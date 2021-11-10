import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchGenre } from "../../actions/genre_actions";
import { fetchMovies } from "../../actions/movie_actions";
import { handleWatchlist } from "../../actions/watchlist_actions";
import GenreIndex from "./genre_index";

const mSTP = (state, ownProps) => {
    return {
        genre: state.entities.genres[ownProps.match.params.genreId],
        movies: state.entities.movies,
        currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mDTP = dispatch => {
    return {
        fetchGenre: genreId => dispatch(fetchGenre(genreId)),
        fetchMovies: () => dispatch(fetchMovies()),
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
    }
};

export default withRouter(connect(mSTP, mDTP)(GenreIndex));