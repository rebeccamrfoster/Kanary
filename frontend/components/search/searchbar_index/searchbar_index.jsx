import React from "react";
import SearchbarIndexItem from "./searchbar_index_item";

class SearchbarIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: "", movies: [] };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSearchResults = this.handleSearchResults.bind(this);
    }

    handleUpdate(event) {
        const query = event.target.value;
        
        const matched = this.props.selectMoviesBySearch(
            this.props.movies, this.props.genres, query
        );

        this.setState({ query: query, movies: matched });
    }

    handleSearchResults() {
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
                <input type="text"
                    placeholder="Search videos, subjects..."
                    onChange={this.handleUpdate} />
                <button>
                    <img src={window.search_icon_black} />
                </button>

                <div className="search-index">
                    {
                        this.state.query === "" ? null : (
                            moviesToDisplay.length !== 0 ? (
                                <div onClick={this.handleSearchResults}>
                                    {
                                        moviesToDisplay.map(movie => (
                                            <SearchbarIndexItem key={movie.id} movie={movie} />
                                        ))
                                    }
                                    <button className="search-index-btn">
                                        <img src={window.search_icon_white} />
                                        <h1>View all results</h1>
                                    </button>
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