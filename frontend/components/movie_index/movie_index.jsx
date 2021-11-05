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
            handleWatchlist
        } = this.props;
        
        if (genres.length === 0 || Object.keys(movies).length === 0) return null;

        return (
            <div>
                <h1>All Movies</h1>
                {
                    genres.map(genre => (
                        <GenreCarousel key={genre.id}
                            currentUser={currentUser}
                            genre={genre}
                            movies={movies}
                            handleWatchlist={handleWatchlist} />
                    ))
                }
            </div>
        )
    }
}

export default MovieIndex;