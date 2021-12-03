import React from "react";
import { Link } from "react-router-dom";
import Popup from "../movie_show/popup";

class GenreCarouselItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayPopup: false };

        this.handleClickWatchlist = this.handleClickWatchlist.bind(this);
        this.toggleIcon = this.toggleIcon.bind(this);
        this.displayPopup = this.displayPopup.bind(this);
        this.clearPopup = this.clearPopup.bind(this);
    }

    componentDidMount() {
        const icon = this.props.currentUser.movieIds.includes(this.props.movie.id) ? (
            window.check_icon
        ) : (
            window.plus_icon
        );
        this.setState({ icon });
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
        if (!this.state.icon) return null;

        const { movie } = this.props;
        
        return (
            <div className="carousel-item">
                <div className="carousel-item-thumbnail"
                    onClick={() => this.props.history.push(`/movies/${movie.id}`)}>
                    <img key={movie.id}
                        src={movie.thumbnail}
                        className="thumbnail-image" />
                    {/* <img className="thumbnail-image" src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" /> */}
                    <div className="thumbnail-overlay"></div>
                    
                    <div className="thumbnail-info">
                        <p className="thumbnail-info-title">{movie.title}</p>
                        <p>{movie.duration} mins</p>
                        <p>{movie.description}</p>
                    </div>
                </div>

                <div className="carousel-item-btns">
                    <Link to={`/movies/${movie.id}`} className="left-btn">
                        <img src={window.play_icon_white} />
                        <h1>Watch</h1>
                    </Link>
                    <button onClick={this.handleClickWatchlist}
                        className="right-btn">
                        <img src={this.state.icon} />
                        <h1>My List</h1>
                    </button>
                </div>

                <p className="carousel-item-title">{movie.title}</p>

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
};

export default GenreCarouselItem;