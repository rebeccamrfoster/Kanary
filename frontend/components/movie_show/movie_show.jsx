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
        if (!this.props.movie || Object.values(this.props.genres).length === 0
            || !this.state) {
            return <div className="movie-show"></div>;
        }
        
        const {
            movie: { title, year, duration, description, director, genreIds },
            genres: genres
        } = this.props;

        // const { title, year, duration, description, director, genreIds } = this.props.movie;
        // const { genres } = this.props;

        return (
            <div className="movie-show">
                <div className="main-movie-show">
                    
                    {/* <video className="main-video" src={video}>
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video> */}
                    <video className="main-video">
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video>
                    <div className="main-video-controls">
                        <button type="button" className="play-pause">Play</button>
                        <input type="range" className="seek-bar" value="0"/>
                        <button type ="button" className="mute">Mute</button>
                        <input type ="range" className="volume-bar" min="0" max="1" step="0.1" value="1"/>
                        <button type ="button" className="full-screen">Full-Screen</button>
                    </div>


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

                
                <Popup key={this.props.movie.id}
                    added={this.state.icon === window.plus_icon}
                    title={title} />
            </div>
        )
    }
}

export default MovieShow;