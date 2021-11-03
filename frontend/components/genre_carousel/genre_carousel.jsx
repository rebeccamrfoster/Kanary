import React from "react";
import GenreCarouselItem from "./genre_carousel_item";

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { genre, allMovies, watchlists, createWatchlist, deleteWatchlist, currentUser } = this.props;
        return (
            <div className="">
                <label>{genre.name}</label>
                <ul className="genre-carousel">
                    {
                        genre.movieIds.map(movieId => {
                            return (
                                <GenreCarouselItem key={movieId}
                                                   movie={allMovies[movieId]}
                                                   createWatchlist={createWatchlist}
                                                   deleteWatchlist={deleteWatchlist}
                                                   currentUser={currentUser}
                                                   watchlists={watchlists} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default GenreCarousel;