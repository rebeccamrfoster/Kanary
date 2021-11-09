import React from "react";
import WatchlistIndexItem from "./watchlist_index_item";

class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchWatchlists();
    }

    render() {
        if (Object.keys(this.props.movies).length === 0) return null;
        if (Object.keys(this.props.watchlists).length === 0) return null;

        const { currentUser, movies, watchlists, handleWatchlist } = this.props;

        return (
            <div className="watchlist-index">
                <h1 className="watchlist-index-title">My Watchlist</h1>
                <div className="watchlist-index-main">
                    {
                        currentUser.movieIds.map(movieId => (
                            <WatchlistIndexItem key={movieId}
                                currentUser={currentUser}
                                movie={movies[movieId]}
                                watchlists={watchlists}
                                handleWatchlist={handleWatchlist} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default WatchlistIndex;