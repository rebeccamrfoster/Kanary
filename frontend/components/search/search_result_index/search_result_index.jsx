import React from "react";
import SearchResultItem from "./search_result_item";

class SearchResultIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: this.props.query, movies: [] };
    }

    componentDidMount() {
        this.props.fetchMovies()
            .then(this.props.fetchGenres())
            .then(() => {
                const { movies, genres, query, selectMoviesBySearch } = this.props;
                const matched = selectMoviesBySearch(movies, genres, query);
                this.setState({ query: this.props.query, movies: matched });
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            const { movies, genres, query, selectMoviesBySearch } = this.props;
            const matched = selectMoviesBySearch(movies, genres, query);
            this.setState({ query: this.props.query, movies: matched });
        }
    }

    render() {
        if (
            Object.values(this.props.movies).length === 0 ||
            Object.values(this.props.genres).length === 0
        ) return null;
        
        return(
            <div className="search-result-index">
                <div className="search-result-main">
                    <h1>Videos</h1>
                    <div className="search-result-group">
                        {
                            this.state.movies.map(movie => (
                                <SearchResultItem key={movie.id} movie={movie} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultIndex;