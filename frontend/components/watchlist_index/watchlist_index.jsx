import React from "react";
import WatchlistIndexItem from "./watchlist_index_item";

class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        if (Object.keys(this.props.movies).length === 0) return null;

        const { currentUser, movies, handleWatchlist } = this.props;

        return (
            <div className="watchlist-index">
                <h1 className="watchlist-index-title">My Watchlist</h1>
                <div className="watchlist-index-main">
                    {
                        currentUser.movieIds.map(movieId => (
                            <WatchlistIndexItem currentUser={currentUser}
                                movie={movies[movieId]}
                                handleWatchlist={handleWatchlist} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default WatchlistIndex;