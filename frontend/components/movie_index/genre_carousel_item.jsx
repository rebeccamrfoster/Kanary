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
                <div className="carousel-item-thumbnail"
                    onClick={() => this.props.history.push(`/movies/${movie.id}`)}>
                    {/* <img key={movie.id}
                        src={movie.thumbnail}
                        className="thumbnail-image" /> */}
                    <img className="thumbnail-image" src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                    <div className="thumbnail-overlay"></div>
                    
                    <div className="thumbnail-info">
                        <p className="thumbnail-info-title">{movie.title}</p>
                        <p>{movie.duration} mins</p>
                        <p>{movie.description}</p>
                    </div>
                </div>

                <div className="carousel-item-btns">
                    <Link to={`/movies/${movie.id}`} className="left-btn">
                        <img src={window.white_play_icon} />
                        <h1>Watch</h1>
                    </Link>
                    <button onClick={this.handleClick}
                        className="right-btn">
                        <img src={this.state.icon} />
                        <h1>My List</h1>
                    </button>
                </div>

                <p className="carousel-item-title">{movie.title}</p>
            </div>
        )
    }
};

export default GenreCarouselItem;