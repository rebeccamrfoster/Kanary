import { connect } from "react-redux";
import GenreCarousel from "./genre_carousel";

const mSTP = state => {
    debugger
    return {
        movies: Object.values(state.entities.movies)
    }
};

const mDTP = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    }
};

export default connect(mSTP, mDTP)(GenreCarousel);