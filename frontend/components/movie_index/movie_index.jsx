import React from "react";
import GenreCarousel from "../genre_carousel/genre_carousel";

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
            createWatchlist,
            deleteWatchlist
        } = this.props;
        
        if (genres.length === 0 || movies.length === 0) return null;
        return (
            <div>
                <h1>All Movies</h1>
                {
                    genres.map(genre => (
                        <GenreCarousel key={genre.id}
                            currentUser={currentUser}
                            genre={genre}
                            movies={movies}
                            createWatchlist={createWatchlist}
                            deleteWatchlist={deleteWatchlist} />
                    ))
                }
            </div>
        )
    }
}

export default MovieIndex;