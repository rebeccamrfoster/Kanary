import React from "react";

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { genre, allMovies } = this.props;
        return (
            <div>
                <label>{genre.name}</label>
                <ul>
                    {
                        genre.movieIds.map(movieId => {
                            return <li key={movieId}>{allMovies[movieId].title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default GenreCarousel;