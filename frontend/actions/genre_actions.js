import * as GenreApiUtil from "../utils/genre_api_util";

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveGenres = genres => {
    return {
        type: RECEIVE_ALL_GENRES,
        genres
    }
};

const receiveGenre = genre => {
    return {
        type: RECEIVE_GENRE,
        genre
    }
};

export const fetchGenres = () => dispatch => {
    return GenreApiUtil.fetchGenres()
        .then(genres => dispatch(receiveGenres(genres)))
};

export const fetchGenre = genreId => dispatch => {
    return GenreApiUtil.fetchGenre(genreId)
        .then(genre => dispatch(receiveGenre(genre)))
};