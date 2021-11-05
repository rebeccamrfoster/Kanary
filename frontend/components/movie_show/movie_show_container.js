import { connect } from "react-redux";
import MovieShow from "./movie_show";
import { fetchMovie } from "../../actions/movie_actions";
import { fetchWatchlists, handleWatchlist } from "../../actions/watchlist_actions";

const mSTP = (state, ownProps) => {
    return {
        movie: state.entities.movies[ownProps.match.params.movieId],
        watchlists: Object.values(state.entities.watchlists)
    }
};

const mDTP = dispatch => {
    return {
        fetchMovie: movieId => dispatch(fetchMovie(movieId)),
        fetchWatchlists: () => dispatch(fetchWatchlists()),
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
    }
};

export default connect(mSTP, mDTP)(MovieShow);