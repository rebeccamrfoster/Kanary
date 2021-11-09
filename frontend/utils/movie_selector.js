export const selectMoviesBySearch = (state, query) => {
    Object.freeze(state);
    const movies = Object.values(state.entities.movies);
    query = query.toLowerCase();

    return movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(query) ||
            movie.description.toLowerCase().includes(query) ||
            movie.director.toLowerCase().includes(query) ||
            selectMoviesByGenre(state, movie.id)
                .some(genre => genre.toLowerCase().includes(query))
        )
    });
};

const selectMoviesByGenre = (state, movieId) => {
    Object.freeze(state);
    const movie = state.entities.movies[movieId];
    const genres = state.entities.genres;

    return movie.genreIds.map(genreId => genres[genreId].name)
};