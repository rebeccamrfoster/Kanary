import React from "react";
import { Link } from "react-router-dom";
import GenreCarouselItem from "./genre_carousel_item";

const GenreCarousel = (props) => {
    const {
        currentUser,
        genre,
        movies,
        handleWatchlist,
        history
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
        <div className="carousel">
            <Link to={`/genres/${genre.id}`}>
                <h1 className="carousel-title">{genre.name}</h1>
            </Link>
            <div className="carousel-main">
                {
                    genre.movieIds.map(movieId => {
                        return (
                            <GenreCarouselItem key={movieId}
                                currentUser={currentUser}
                                movie={movies[movieId]}
                                handleWatchlist={handleWatchlist}
                                history={history} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GenreCarousel;