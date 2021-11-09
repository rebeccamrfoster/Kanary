export const selectMoviesBySearch = (movies, genres, query) => {
    // Object.freeze(state);
    // const movies = Object.values(state.entities.movies);
    query = query.toLowerCase();

    return Object.values(movies).filter(movie => {
        return (
            movie.title.toLowerCase().includes(query) ||
            movie.description.toLowerCase().includes(query) ||
            movie.director.toLowerCase().includes(query) ||
            selectGenresByMovie(genres, movie)
                .some(genre => genre.toLowerCase().includes(query))
        )
    });
};

const selectGenresByMovie = (genres, movie) => {
    // Object.freeze(state);
    // const movie = state.entities.movies[movieId];
    // const genres = state.entities.genres;

    return movie.genreIds.map(genreId => genres[genreId].name)
};