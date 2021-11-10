import React from "react";
import { Link } from "react-router-dom";

const SearchbarIndexItem = ({ movie }) => {
    
    return (
        <Link to={`/movies/${movie.id}`} className="search-index-item">
            <div className="search-thumbnail">
                <div className="search-thumbnail-inner">
                    <img key={movie.id} src={movie.thumbnail} />
                    {/* <img src="https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" /> */}
                </div>
            </div>

            <div className="search-info">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
            </div>
        </Link>
    )
};

export default SearchbarIndexItem;