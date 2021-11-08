import React from "react";
import GenreCarousel from "./genre_carousel";

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchGenres();
    }

    render() {
        const {
            currentUser,
            genres,
            movies,
            handleWatchlist,
            history
        } = this.props;
        
        if (genres.length === 0 || Object.keys(movies).length === 0) return null;
        
        return (
            <div className="movie-index">
                <div className="movie-index-banner">
                    <p className="banner-text">Enjoy critically-acclaimed movies, inspiring 
                        documentaries, award-winning foreign films and more</p>
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
}

export default MovieIndex;