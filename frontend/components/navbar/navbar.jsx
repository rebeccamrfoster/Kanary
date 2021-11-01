import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    if (!props.currentUser) {
        return (
            <nav>
                <Link to="/movies">
                    <h1>Kanary</h1>
                </Link>
                <Link to="/login">LOG IN</Link>
            </nav>
        )
    }
    else {
        return (
            <nav>
                <p>Hello, {props.currentUser.name}</p>
                <Link to="/movies">
                    <h1>Kanary</h1>
                </Link>
                <button onClick={() => props.logout()}>Log out</button>
            </nav>
        )
    }
}

export default Navbar;