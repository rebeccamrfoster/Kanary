import * as MovieApiUtil from "../utils/movie_api_util";

export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

const receiveMovies = movies => {
    return {
        type: RECEIVE_ALL_MOVIES,
        movies
    }
};

const receiveMovie = movie => {
    return {
        type: RECEIVE_MOVIE,
        movie
    }
};

export const fetchMovies = () => dispatch => {
    return MovieApiUtil.fetchMovies()
        .then(movies => dispatch(receiveMovies(movies)))
};

export const fetchMovie = movieId => dispatch => {
    return MovieApiUtil.fetchMovie(movieId)
        .then(movie => dispatch(receiveMovie(movie)))
};