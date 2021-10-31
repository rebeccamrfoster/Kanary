import React from "react";

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <h1>All Movies</h1>
        )
    }
}

export default MovieIndex;