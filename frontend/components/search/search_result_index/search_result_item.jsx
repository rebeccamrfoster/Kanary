import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = ({ movie }) => {
    return (
        <div className="search-result-item">
            <div className="search-result-thumbnail">
                <div className="search-result-thumbnail-inner">
                    <Link to={`/movies/${movie.id}`}>
                        {/* <img key={movie.id} src={movie.thumbnail} /> */}
                        <img src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                    </Link>
                </div>
            </div>

            <div className="search-result-info">
                <Link to={`/movies/${movie.id}`}>
                    <h1>{movie.title}</h1>
                </Link>
                <p>{movie.description}</p>
            </div>
        </div>
    )
};

export default SearchResultItem;