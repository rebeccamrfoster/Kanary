import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        debugger
        return (
            <nav>
                <Link to="/">
                    <h1>Kanary</h1>
                </Link>
                {
                    !this.props.currentUser ? (
                        <Link to="/login">LOG IN</Link>
                    ) : null
                }
                
            </nav>
        )
    }
};

export default Navbar;