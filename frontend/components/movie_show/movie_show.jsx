import React from "react";
import { Link } from "react-router-dom";
import Popup from "./popup";

class MovieShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.toggleIcon = this.toggleIcon.bind(this);
    }

    componentDidMount() {
        this.props.fetchGenres();
        this.props.fetchWatchlists();
        this.props.fetchMovie(this.props.match.params.movieId)
            .then(() => {
                const { currentUser, movie } = this.props;
                const icon = currentUser.movieIds.includes(movie.id) ? (
                    window.check_icon
                ) : (
                    window.plus_icon
                );
                this.setState({ icon });
            })
    }

    handleClick() {
        const { currentUser, movie, handleWatchlist } = this.props;
        handleWatchlist(currentUser, movie)
            .then(this.toggleIcon);
    }

    toggleIcon() {
        // const root = document.getElementById("root");
        // const div = document.createElement("div");
        // div.id = "popup";
        // root.appendChild(div);

        if (this.state.icon === window.plus_icon) {
            this.setState({ icon: window.check_icon });
        }
        else {
            this.setState({ icon: window.plus_icon });
        }
    }

    render() {
        if (!this.props.movie || !this.props.genres || !this.state) return null;

        // const {
        //     movie: { title, year, duration, description, director, genreIds },
        //     genres
        // } = this.props;

        const { title, year, duration, description, director, genreIds } = this.props.movie;
        const { genres } = this.props;

        return (
            <div className="movie-show">
                <div className="main-movie-show">
                    <video className="main-video"></video>
                    <h1 className="main-title">{title}</h1>
                    <button className="main-button" onClick={this.handleClick}>
                        <img className="main-button-image" src={this.state.icon} />
                        <h1 className="main-button-text">My List</h1>
                    </button>
                </div>

                <div className="info-movie-show">
                    <p className="description">{description}</p>
                    <div className="container">
                        <p>Running Time</p><p>{duration} mins</p>
                        <p>Year</p><p>{year}</p>
                        <p>Filmmaker</p><p>{director}</p>
                        <p>Subjects</p>
                        <div>
                            {
                                genreIds.map(genreId => {
                                    return (
                                        <div key={genreId} className="genres">
                                            <Link to="/">
                                                {`> ${genres[genreId].name}`}
                                            </Link>
                                            <br />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {
                    this.state.icon === window.plus_icon ? (
                        <Popup key={this.props.movie.id}
                            added={true}
                            title={this.props.movie.title} />
                    ) : (
                        <Popup key={this.props.movie.id}
                            added={false}
                            title={this.props.movie.title} />
                    )
                }
                

            </div>
        )
    }
}

export default MovieShow;