import React from "react";
import WatchlistIndexItem from "./watchlist_index_item";

class WatchlistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchMovies();
        this.props.fetchWatchlists();
    }

    render() {
        const { currentUser, movies, watchlists, handleWatchlist } = this.props;

        if (currentUser.movieIds.length === 0) {
            return (
                <div className="null-render">
                    <h1 className="watchlist-index-title">My Watchlist</h1>
                    <div className="meh">
                        <img src={window.meh_icon} />
                    </div>
                    <h1 className="null-render-text">You haven't added any videos to your Watchlist yet!</h1>
                </div>
            )
        }

        const nullRender = <div className="null-render"></div>;
        if (Object.values(movies).length === 0) return nullRender;
        if (Object.values(watchlists).length === 0) return nullRender;

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
                                handleWatchlist={handleWatchlist}
                                formattedDate={formattedDate} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default WatchlistIndex;