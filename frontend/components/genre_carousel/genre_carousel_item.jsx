import React from "react";

class GenreCarouselItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleWatchlist = this.handleWatchlist.bind(this);
    }

    handleWatchlist() {
        const { movie, watchlists, currentUser, createWatchlist, deleteWatchlist } = this.props;

        const watchlist = { user_id: currentUser.id, movie_id: movie.id }

        if (currentUser.movieIds.includes(movie.id)) {
            deleteWatchlist(watchlist);
        }
        else {
            createWatchlist(watchlist);
        }

        // const watchlist = watchlists.find(watchlist => (
        //     watchlist.user_id === currentUser.id &&
        //     watchlist.movie_id === movie.id
        // ));

        // if (watchlist) {
        //     deleteWatchlist(watchlist.id);
        // }
        // else {
        //     createWatchlist({ user_id: currentUser.id, movie_id: movie.id });
        // }
    }

    render() {
        const { movie } = this.props;
        return (
            <li key={movie.id} className="genre-carousel-item">
                <div className="thumbnail">
                    <img src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                    {/* <img key={movie.id} src={movie.thumbnail} /> */}
                    <div className="overlay"></div>
                </div>

                <div className="info">
                    <p className="title-info">{movie.title}</p>
                    <p className="duration-info">{movie.duration}</p>
                    <p className="description-info">{movie.description}</p>
                </div>
                <div className="buttons">
                    <button className="left-button">Watch</button>
                    <button className="right-button" onClick={this.handleWatchlist}>My List</button>
                </div>
            </li>
        )
    }
};

export default GenreCarouselItem;