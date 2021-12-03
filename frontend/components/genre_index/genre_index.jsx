import React from "react";
import GenreCarouselItem from "../movie_index/genre_carousel_item";

const GenreIndex = props =>  {
    const { genre, movies, currentUser, handleWatchlist, history } = props;

    const nullRender = <div className="null-render"></div>;
    if (!genre) return nullRender;
    if (Object.values(movies).length === 0) return nullRender;

    return (
        <div className="genre-index">
            <h1>{genre.name}</h1>
            <div className="genre-index-main">
                {
                    genre.movieIds.map(movieId => (
                        <div key={movieId} className="genre-index-item">
                            <GenreCarouselItem currentUser={currentUser}
                                movie={movies[movieId]}
                                handleWatchlist={handleWatchlist}
                                history={history} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GenreIndex;