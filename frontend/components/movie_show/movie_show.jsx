import React from "react";
import { Link } from "react-router-dom";
import Popup from "./popup";

class MovieShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayPopup: false };

        this.handleClickWatchlist = this.handleClickWatchlist.bind(this);
        this.toggleIcon = this.toggleIcon.bind(this);
        this.displayPopup = this.displayPopup.bind(this);
        this.clearPopup = this.clearPopup.bind(this);
    }

    componentDidMount() {
        this.props.fetchWatchlists()
            .then(() => {
                const movieId = parseInt(this.props.match.params.movieId);
                const icon = this.props.currentUser.movieIds.includes(movieId) ? (
                    window.check_icon
                ) : (
                    window.plus_icon
                );
                this.setState({ icon });
            })
    }

    handleClickWatchlist() {
        const el = document.querySelector(".popup");
        if (el) el.id = "fade-in";

        const { currentUser, movie, handleWatchlist } = this.props;
        handleWatchlist(currentUser, movie)
            .then(this.toggleIcon)
            .then(this.displayPopup);
    }

    toggleIcon() {
        if (this.state.icon === window.plus_icon) {
            this.setState({ icon: window.check_icon });
        }
        else {
            this.setState({ icon: window.plus_icon });
        }
    }

    displayPopup() {
        this.setState({ displayPopup: true });
    }

    clearPopup() {
        this.setState({ displayPopup: false });
    }

    render() {
        const nullRender = <div className = "null-render"></div>;
        if (!this.props.movie) return nullRender;
        if (Object.values(this.props.genres).length === 0) return nullRender;
        if (!this.state) return nullRender; 
        
        const { movie, genres } = this.props;

        return (
            <div className="movie-show">
                <div className="main-movie-show">
                    
                    <video controls preload="auto" className="main-video">
                        <source src={movie.video} type="video/mp4" />
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video>
                    {/* <video className="main-video">
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video> */}

                    <h1 className="main-title">{movie.title}</h1>
                    <button className="main-button" onClick={this.handleClickWatchlist}>
                        <img className="main-button-image" src={this.state.icon} />
                        <h1 className="main-button-text">My List</h1>
                    </button>
                </div>

                <div className="info-movie-show">
                    <p className="description">{movie.description}</p>
                    <div className="container">
                        <p>Running Time</p><p>{movie.duration} mins</p>
                        <p>Year</p><p>{movie.year}</p>
                        <p>Filmmaker</p><p>{movie.director}</p>
                        <p>Subjects</p>
                        <div>
                            {
                                movie.genreIds.map(genreId => {
                                    return (
                                        <div key={genreId} className="genres">
                                            <Link to={`/genres/${genreId}`}>
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
                    this.state.displayPopup ? (
                        <Popup key={movie.id}
                            added={this.state.icon === window.check_icon}
                            title={movie.title}
                            clearPopup={this.clearPopup} />
                    ) : null
                }
            </div>
        )
    }
}

export default MovieShow;