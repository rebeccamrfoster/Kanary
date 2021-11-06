import React from "react";
import { Link } from "react-router-dom";

class GenreCarouselItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.toggleIcon = this.toggleIcon.bind(this);
    }

    componentDidMount() {
        const { currentUser, movie } = this.props;
        const icon = currentUser.movieIds.includes(movie.id) ? (
            window.check_icon
        ) : (
            window.plus_icon
        );
        this.setState({ icon });
    }

    handleClick() {
        const { currentUser, movie, handleWatchlist } = this.props;
        handleWatchlist(currentUser, movie)
            .then(this.toggleIcon);
    }

    toggleIcon() {
        if (this.state.icon === window.plus_icon) {
            this.setState({ icon: window.check_icon });
        }
        else {
            this.setState({ icon: window.plus_icon });
        }
    }

    render() {
        if (!this.state) return null;

        const { movie } = this.props;

        return (
            <div className="carousel-item">
                {/* <Link to={`/movies/${movie.id}`}></Link> */}
                <div className="thumbnail">
                    {/* <img key={movie.id} src={movie.thumbnail} /> */}
                    <img className="thumbnail-image" src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                    <div className="thumbnail-overlay"></div>
                    
                    <div className="info">
                        <p className="info-title">{movie.title}</p>
                        <p className="info-duration">{movie.duration} mins</p>
                        <p className="info-description">{movie.description}</p>
                    </div>
                </div>


                <div className="carousel-item-buttons">
                    <Link to={`/movies/${movie.id}`} className="left-button">
                        <img src={window.play_icon} className="icon-button" />
                        <h1 className="text-button">Watch</h1>
                    </Link>
                    <button onClick={this.handleClick}
                        className="right-button">
                        <img src={this.state.icon} className="icon-button" />
                        <h1 className="text-button">My List</h1>
                    </button>

                    {/* <button className="left-button">Watch</button>
                    <button className="right-button" 
                        onClick={() => handleWatchlist(currentUser, movie)}>My List</button> */}
                </div>

                <p className="lower-title">{movie.title}</p>
            </div>
        )
    }
};

export default GenreCarouselItem;