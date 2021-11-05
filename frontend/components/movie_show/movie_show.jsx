import React from "react";

class MovieShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId)
        this.props.fetchWatchlists();
    }

    render() {
        if (!this.props.movie) return null;

        const { title, year, duration, description, director } = this.props.movie;

        return (
            <div className="movie-show">
                <div className="main-movie-show">
                    <video></video>
                    <h1>{title}</h1>
                    <button>
                        <img src={window.white_check_icon} />
                        <h1>My List</h1>
                    </button>
                </div>

                <div className="info-movie-show">

                </div>


            </div>
        )
    }
}

export default MovieShow;