import React from "react";

class MovieShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWatchlists();
    }

    render() {
        const { title, year, duration, description, director } = this.props;

        return (
            <div>Movie show</div>
        )
    }
}

export default MovieShow;