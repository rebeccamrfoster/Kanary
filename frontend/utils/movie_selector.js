export const selectMoviesBySearch = (movies, genres, query) => {
    query = query.toLowerCase();

    return Object.values(movies).filter(movie => (
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query) ||
        movie.director.toLowerCase().includes(query) ||
        selectGenresByMovie(genres, movie)
            .some(genre => genre.toLowerCase().includes(query))
    ));
};

const selectGenresByMovie = (genres, movie) => (
    movie.genreIds.map(genreId => genres[genreId].name)
);