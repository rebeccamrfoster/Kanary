import React from "react";
import { Link } from "react-router-dom";
import SearchbarIndexContainer from ".././search/searchbar_index/searchbar_index_container";

class Navbar extends React.Component {
    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        if (!this.props.genres) return null;

        const { currentUser, genres, logout } = this.props;

        if (!currentUser) {
            return (
                <nav className="navbar">
                    <Link to="/movies" className="logo">kanary</Link>
                    <Link to="/login" className="login">LOG IN</Link>
                </nav>
            )
        }
        else {
            return (
                <nav className="navbar">
                    <Link to="/movies" className="logo">kanary</Link>

                    <SearchbarIndexContainer />

                    <div className="dropdown-container">
                        <div className="browse-dropdown-btn">
                            <h1>Browse</h1>
                            <div className="caret">
                                <img src={window.caret_icon} />
                            </div>

                            <ul className="browse-dropdown">
                                {
                                    genres.map(genre => (
                                        <li key={genre.id}>
                                            <Link to={`/genres/${genre.id}`}>
                                                {genre.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="name-dropdown-btn">
                            <h1>{currentUser.name.split(" ")[0]}</h1>
                            <div className="caret">
                                <img src={window.caret_icon} />
                            </div>

                            <ul className="name-dropdown">
                                <li>
                                    <Link to="/watchlists">My Watchlist</Link>
                                </li>
                                <li>
                                    <a onClick={() => logout()}>Log out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
    }
}

export default Navbar;