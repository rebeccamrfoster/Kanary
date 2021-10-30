import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Kanary</h1>
            </Link>
            <Link to="/login">LOG IN</Link>
        </nav>
    )
};

export default Navbar;