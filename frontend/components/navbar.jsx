import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h1>Kanary</h1>
            <Link to="/login">LOG IN</Link>
        </nav>
    )
};

export default Navbar;