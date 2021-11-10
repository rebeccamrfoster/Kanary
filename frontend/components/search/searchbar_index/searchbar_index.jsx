import React from "react";
import SearchbarIndexItem from "./searchbar_index_item";
import { Link } from "react-router-dom";

class SearchbarIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: "", movies: [] };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClearSearchbar = this.handleClearSearchbar.bind(this);
    }

    handleUpdate(event) {
        const query = event.target.value;
        
        const matched = this.props.selectMoviesBySearch(
            this.props.movies, this.props.genres, query
        );

        this.setState({ query: query, movies: matched });
    }

    handleClearSearchbar() {
        this.setState({ query: "", movies: [] });
        const input = document.querySelector(".searchbar input");
        input.value = "";
    }
    
    render() {
        const { movies, genres } = this.props;
        if (!movies || !genres ) return null;
    
        const moviesToDisplay = this.state.movies.slice(0, 5);
        
        return (
            <div className="searchbar">
                <form className="searchbar-input" onSubmit={() => {
                    if (this.state.query !== "") {
                        this.handleClearSearchbar();
                        this.props.history.push(`/search/${this.state.query}`);
                    }
                }}>
                    <input type="text"
                        placeholder="Search videos, subjects..."
                        onChange={this.handleUpdate} />
                    <button type="submit">
                        <img src={window.search_icon_black} />
                    </button>
                </form>

                <div className="search-index">
                    {
                        this.state.query === "" ? null : (
                            moviesToDisplay.length !== 0 ? (
                                <div onClick={this.handleClearSearchbar}>
                                    {
                                        moviesToDisplay.map(movie => (
                                            <SearchbarIndexItem key={movie.id} movie={movie} />
                                        ))
                                    }
                                    <Link to={`/search/${this.state.query}`} className="search-index-btn">
                                        <img src={window.search_icon_white} />
                                        <h1>View all results</h1>
                                    </Link>
                                </div>
                            ) : (
                                <div className="search-index-item empty">
                                    <div className="search-info">
                                        <h1>We couldn't find any results for "{this.state.query}"</h1>
                                        <p>Try using keywords like "love", "race", or "women".</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>         
            </div>
        )
    }
}

export default SearchbarIndex;