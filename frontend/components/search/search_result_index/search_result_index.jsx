import React from "react";
import SearchResultItem from "./search_result_item";

class SearchResultIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: this.props.query, movies: null };
    }

    componentDidMount() {
        this.props.fetchMovies()
            .then(() => {
                const { movies, genres, query, selectMoviesBySearch } = this.props;
                const matched = selectMoviesBySearch(movies, genres, query);
                this.setState({ query: this.props.query, movies: matched });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const { movies, genres, query, selectMoviesBySearch } = this.props;
        debugger
        if (prevProps.query !== query && query !== "") {
            const matched = selectMoviesBySearch(movies, genres, query);
            this.setState({ query, movies: matched });
        }
    }

    render() {
        const { movies, genres } = this.props;
        
        const nullRender = <div className="null-render"></div>;
        if (!this.state.movies) return nullRender;
        if (Object.values(movies).length === 0) return nullRender;
        if (Object.values(genres).length === 0) return nullRender;
        debugger
        return (
            <div className="search-result-index">
                <div className="search-result-main">
                    <h1 className="search-result-main-title">Videos</h1>
                    {
                        this.state.movies.length !== 0 ? (
                            <>
                            <div className="search-result-group">
                                {
                                    this.state.movies.map(movie => (
                                        <SearchResultItem key={movie.id}
                                            movie={movie} />
                                    ))
                                }
                            </div>
                            </>
                        ) : (
                            <>
                            <div className="meh">
                                <img src={window.meh_icon} />
                            </div>
                            <h1 className="null-render-text">We couldn't find any results for "{this.state.query}"</h1>
                            <p className="null-render-text">Try using keywords like "love", "race", or "women".</p>
                            </>
                        )
                    }   
                </div>
            </div>
        )
    }
}

export default SearchResultIndex;