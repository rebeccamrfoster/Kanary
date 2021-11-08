import React from "react";

const WatchlistIndexItem = ({ currentUser, movie, handleWatchlist }) => {
    const { title, year, duration, description, director } = movie;
    
    return (
        <div className="watchlist-index-item">
            <div className="watchlist-left">
                <div className="watchlist-left-thumbnail">
                    {/* <img key={movie.id} src={movie.thumbnail} /> */}
                    <img src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                </div>
            </div>

            <div className="watchlist-right">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{movie.created_at}</p>

                <div className="watchlist-right-btns">
                    <button className="watch-btn">
                        <img src={window.play_icon} />
                        <p>Watch now</p>
                    </button>
                    <button className="remove-btn">
                        <img src={window.trash_icon} />
                        <p>Remove</p>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default WatchlistIndexItem;