import React from "react";
import { Link } from "react-router-dom";
import GenreCarouselItem from "./genre_carousel_item";

const GenreCarousel = props => {
    const {
        currentUser,
        genre,
        movies,
        handleWatchlist,
        history
    } = props;
    
    return (
        <div className="carousel">
            <Link to={`/genres/${genre.id}`}>
                <h1 className="carousel-title">{genre.name}</h1>
            </Link>
            <div className="carousel-main">
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
    )
}

export default GenreCarousel;