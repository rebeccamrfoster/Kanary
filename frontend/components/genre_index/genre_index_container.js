import { connect } from "react-redux";
import { withRouter } from "react-router";
import { handleWatchlist } from "../../actions/watchlist_actions";
import GenreIndex from "./genre_index";

const mSTP = (state, ownProps) => ({
    genre: state.entities.genres[ownProps.match.params.genreId],
    movies: state.entities.movies,
    currentUser: state.entities.users[state.session.currentUserId]
});

const mDTP = dispatch => ({
    handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
});

export default withRouter(connect(mSTP, mDTP)(GenreIndex));