import React from "react";
import { Link } from "react-router-dom";

class WatchlistIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movieIds: this.props.currentUser.movieIds };

        this.handleRemoveWatchlist = this.handleRemoveWatchlist.bind(this);
    }

    handleRemoveWatchlist() {
        const { currentUser, movie, handleWatchlist } = this.props;

        const nextMovieIds = this.state.movieIds.slice();
        nextMovieIds.splice(nextMovieIds.indexOf(movie.id), 1);

        // if (this.state.movieIds.includes(movie.id)) {
        //     nextMovieIds.splice(nextMovieIds.indexOf(movie.id), 1);
        // }
        // else {
        //     nextMovieIds.push(movie.id);
        // }

        this.setState({ movieIds: nextMovieIds });
        handleWatchlist(currentUser, movie);
    }

    render() {
        if (!this.state.movieIds.includes(this.props.movie.id)) return null;

        const { watchlists, currentUser, movie: movie, movie: {title, description} } = this.props;

        const currWatchlistId = Object.values(watchlists).find(watchlist => (
            watchlist.user_id === currentUser.id &&
            watchlist.movie_id === movie.id
        )).id;
        
        const formattedDate = this.props.formattedDate(
            watchlists[currWatchlistId].created_at
        );
        
        return (
            <div className="watchlist-index-item">
                <div className="watchlist-left">
                    <div className="watchlist-left-thumbnail">
                        <img key={movie.id} src={movie.thumbnail} />
                        {/* <img src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" /> */}
                    </div>
                </div>
    
                <div className="watchlist-right">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p className="watchlist-right-date">{formattedDate}</p>
    
                    <div className="watchlist-right-btns">
                        <Link to={`/movies/${movie.id}`} className="watch-btn">
                            <img src={window.orange_play_icon} />
                            <p>Watch now</p>
                        </Link>
                        <button className="remove-btn" 
                            onClick={this.handleRemoveWatchlist}>
                            <img src={window.trash_icon} />
                            <p>Remove</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WatchlistIndexItem;