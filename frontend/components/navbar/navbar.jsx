import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    if (!props.currentUser) {
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

                <div className="searchbar">
                    <input type="text"
                        placeholder="Search videos, subjects..." />
                    <button>
                        <img src={window.search_icon} />
                    </button>
                </div>

                <div className="dropdown-container">
                    <div className="browse-dropdown-btn">
                        <h1>Browse</h1>
                        <div className="caret">
                            <img src={window.caret_icon} />
                        </div>
                        
                        <ul className="browse-dropdown">
                            {
                                props.genres.map(genre => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                            
                    <div className="name-dropdown-btn">
                        <h1>{props.currentUser.name.split(" ")[0]}</h1>
                        <div className="caret">
                            <img src={window.caret_icon} />
                        </div>

                        <ul className="name-dropdown">
                            <li>
                                <Link to="/watchlists">My Watchlist</Link>
                            </li>
                            <li>
                                <a onClick={() => props.logout()}>Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <button onClick={() => props.logout()}>Log out</button> */}
            </nav>
        )
    }
}

export default Navbar;