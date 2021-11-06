import React from "react";
import GenreCarouselItem from "./genre_carousel_item";

const GenreCarousel = (props) => {
    const {
        currentUser,
        genre,
        movies,
        handleWatchlist
    } = props;

    // var settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     centerPadding: "10px",
    //     arrows: true,
    //     variableWidth: false,
    //     prevArrow: <img src={window.prev_arrow_icon} />,
    //     nextArrow: <img src={window.next_arrow_icon} />
    // };

    return (
        <div>
            <label>{genre.name}</label>
            <div className="carousel">
                {
                    genre.movieIds.map(movieId => {
                        return (
                            <GenreCarouselItem key={movieId}
                                currentUser={currentUser}
                                movie={movies[movieId]}
                                handleWatchlist={handleWatchlist} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GenreCarousel;