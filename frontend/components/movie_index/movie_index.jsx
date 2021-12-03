import React from "react";
import GenreCarousel from "./genre_carousel";

const MovieIndex = props => {
    const { currentUser, genres, movies, handleWatchlist, history } = props;

    const nullRender = <div className="null-render"></div>;
    if (Object.values(movies).length === 0) return nullRender;
    if (!genres) return nullRender;
    
    return (
        <div className="movie-index">
            <div className="movie-index-banner">
                <p className="banner-text">Enjoy critically-acclaimed movies, 
                    inspiring documentaries, award-winning foreign films and more</p>
                <img src={window.movie_index_banner}/>
            </div>
            {
                genres.map(genre => (
                    <GenreCarousel key={genre.id}
                        currentUser={currentUser}
                        genre={genre}
                        movies={movies}
                        handleWatchlist={handleWatchlist}
                        history={history} />
                ))
            }
        </div>
    )
}

export default MovieIndex;