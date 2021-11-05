import React from "react";
import GenreCarouselItem from "./genre_carousel_item";

const GenreCarousel = (props) => {
    const {
        currentUser,
        genre,
        movies,
        createWatchlist,
        deleteWatchlist
    } = props;

    return (
        <div>
            <label>{genre.name}</label>
            <ul className="carousel">
                {
                    genre.movieIds.map(movieId => {
                        return (
                            <GenreCarouselItem key={movieId}
                                currentUser={currentUser}
                                movie={movies[movieId]}
                                createWatchlist={createWatchlist}
                                deleteWatchlist={deleteWatchlist} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default GenreCarousel;