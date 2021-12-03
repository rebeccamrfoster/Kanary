import { connect } from "react-redux";
import MovieShow from "./movie_show";
import { fetchWatchlists, handleWatchlist } from "../../actions/watchlist_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    movie: state.entities.movies[ownProps.match.params.movieId],
    genres: state.entities.genres
});

const mDTP = dispatch => ({
    fetchWatchlists: () => dispatch(fetchWatchlists()),
    handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
});

export default connect(mSTP, mDTP)(MovieShow);