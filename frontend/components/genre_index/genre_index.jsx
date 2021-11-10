import React from "react";
import GenreCarouselItem from "../movie_index/genre_carousel_item";

class GenreIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGenre(this.props.match.params.genreId);
        this.props.fetchMovies();
    }

    render() {
        if (!this.props.genre || 
            Object.values(this.props.movies).length === 0) return null;

        const { genre, movies, currentUser, handleWatchlist, history } = this.props;

        return (
            <div className="genre-index movie-index">
                <h1>{genre.name}</h1>
                <div className="genre-index-main carousel">
                    <div className="genre-index-movies carousel-main">
                        {
                            genre.movieIds.map(movieId => (
                                <GenreCarouselItem key={movieId}
                                    currentUser={currentUser}
                                    movie={movies[movieId]}
                                    handleWatchlist={handleWatchlist}
                                    history={history} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GenreIndex;