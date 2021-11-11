import { connect } from "react-redux";
import MovieShow from "./movie_show";
import { fetchMovie } from "../../actions/movie_actions";
import { fetchGenres } from "../../actions/genre_actions";
import { fetchWatchlists, handleWatchlist } from "../../actions/watchlist_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        movie: state.entities.movies[ownProps.match.params.movieId],
        genres: state.entities.genres
    }
};

const mDTP = dispatch => {
    return {
        fetchWatchlists: () => dispatch(fetchWatchlists()),
        handleWatchlist: (user, movie) => dispatch(handleWatchlist(user, movie))
    }
};

export default connect(mSTP, mDTP)(MovieShow);