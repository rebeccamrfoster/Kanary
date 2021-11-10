import React from "react";

class GenreIndex extends React.Component {
    

    componentDidMount() {
        this.props.fetchGenre(this.props.match.params.genreId);
        this.props.fetchMovies();
    }

    render() {
        if (!this.props.genre || 
            Object.values(this.props.movies).length === 0) return null;

        return (
            <div className="genre-index">

            </div>
        )
    }
}

export default GenreIndex;