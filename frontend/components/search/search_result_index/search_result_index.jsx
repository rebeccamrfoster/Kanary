import React from "react";
import SearchResultItem from "./search_result_item";

class SearchResultIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: this.props.query, movies: null };
    }

    componentDidMount() {
        const { movies, genres, query, selectMoviesBySearch } = this.props;
        const matched = selectMoviesBySearch(movies, genres, query);
        this.setState({ query: this.props.query, movies: matched });

        // this.props.fetchMovies()
        //     .then(this.props.fetchGenres())
        //     .then(() => {
        //         const { movies, genres, query, selectMoviesBySearch } = this.props;
        //         const matched = selectMoviesBySearch(movies, genres, query);
        //         this.setState({ query: this.props.query, movies: matched });
        //     });
    }

    componentDidUpdate(prevProps) {
        const { movies, genres, query, selectMoviesBySearch } = this.props;
        if (prevProps.query !== query && query !== "") {
            const matched = selectMoviesBySearch(movies, genres, query);
            this.setState({ query: query, movies: matched });
        }
    }

    render() {
        const { movies, genres } = this.props;

        const nullRender = <div className="null-render"></div>;
        if (!this.state.movies) return nullRender;
        if (Object.values(movies).length === 0) return nullRender;
        if (Object.values(genres).length === 0) return nullRender;
        
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