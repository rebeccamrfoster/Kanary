import React from "react";
import { Link } from "react-router-dom";

class GenreCarouselItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleWatchlist = this.handleWatchlist.bind(this);
    }

    handleWatchlist() {
        const {
            currentUser,
            movie,
            createWatchlist,
            deleteWatchlist
        } = this.props;

        const watchlist = { user_id: currentUser.id, movie_id: movie.id }
        if (currentUser.movieIds.includes(movie.id)) {
            deleteWatchlist(watchlist);
        }
        else {
            createWatchlist(watchlist);
        }
    }

    render() {
        const { movie } = this.props;

        return (
            <Link to={`/movies/${movie.id}`} className="carousel-item">
                <div className="thumbnail">
                    {/* <img key={movie.id} src={movie.thumbnail} /> */}
                    <img src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                    <div className="overlay"></div>
                </div>

                <div className="info">
                    <p className="title-info">{movie.title}</p>
                    <p className="duration-info">{movie.duration}</p>
                    <p className="description-info">{movie.description}</p>
                </div>
                <div className="buttons">
                    <button className="left-button">Watch</button>
                    <button className="right-button" 
                        onClick={this.handleWatchlist}>My List</button>
                </div>
            </Link>
        )
    }
};

export default GenreCarouselItem;