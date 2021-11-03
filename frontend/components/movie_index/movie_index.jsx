import React from "react";
import GenreCarousel from "../genre_carousel/genre_carousel";

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchGenres();
        this.props.fetchWatchlists();
    }

    render() {
        const { genres, movies, watchlists, createWatchlist, deleteWatchlist, currentUser } = this.props;
        
        if (genres.length === 0 || 
            movies.length === 0 || 
            watchlists.length === 0) return null;
        return (
            <div>
                <h1>All Movies</h1>
                {
                    genres.map(genre => (
                        <GenreCarousel key={genre.id}
                                       genre={genre}
                                       allMovies={movies}
                                       watchlists={watchlists}
                                       createWatchlist={createWatchlist}
                                       deleteWatchlist={deleteWatchlist}
                                       currentUser={currentUser} />
                    ))
                }
            </div>
        )
    }
}

export default MovieIndex;