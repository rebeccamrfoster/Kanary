import React from "react";

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestMovies();
    }

    render() {
        return (
            <h1>All Movies</h1>
        )
    }
}

export default MovieIndex;