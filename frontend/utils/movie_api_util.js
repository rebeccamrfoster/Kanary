export const fetchMovies = () => {
    return $.ajax({
        method: "GET",
        url: "/api/movies"
    })
};

export const fetchMovie = movieId => {
    return $.ajax({
        method: "GET",
        url: `/api/movies/${movieId}`
    })
};