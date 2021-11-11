import React from "react";
import GenreCarouselItem from "../movie_index/genre_carousel_item";

class GenreIndex extends React.Component {
    // componentDidMount() {
        // this.props.fetchGenre(this.props.match.params.genreId);
        // this.props.fetchMovies();
    // }

    render() {
        const { genre, movies, currentUser, handleWatchlist, history } = this.props;

        const nullRender = <div className="null-render"></div>;
        if (!genre) return nullRender;
        if (Object.values(movies).length === 0) return nullRender;

        return (
            <div className="genre-index">
                <h1>{genre.name}</h1>
                <div className="genre-index-main">
                    {
                        genre.movieIds.map(movieId => (
                            <div className="genre-index-item">
                                <GenreCarouselItem key={movieId}
                                    currentUser={currentUser}
                                    movie={movies[movieId]}
                                    handleWatchlist={handleWatchlist}
                                    history={history} />
                            </div>
                        ))
                    }
                </div>
            </div>
            
            // <div className="genre-index movie-index">
            //     <h1>{genre.name}</h1>
            //     <div className="genre-index-main carousel">
            //         <div className="genre-index-movies carousel-main">
            //             {
            //                 genre.movieIds.map(movieId => (
            //                     <GenreCarouselItem key={movieId}
            //                         currentUser={currentUser}
            //                         movie={movies[movieId]}
            //                         handleWatchlist={handleWatchlist}
            //                         history={history} />
            //                 ))
            //             }
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default GenreIndex;