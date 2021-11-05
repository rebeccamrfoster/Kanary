import { connect } from "react-redux";
import MovieShow from "./movie_show";
import { fetchMovie } from "../../actions/movie_actions";

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
        createWatchlist: watchlist => dispatch(createWatchlist(watchlist)),
        deleteWatchlist: watchlistId => dispatch(deleteWatchlist(watchlistId))
    }
};

export default connect(mSTP, mDTP)(MovieShow);