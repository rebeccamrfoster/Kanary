import React from "react";
import { Link } from "react-router-dom";

const Splash = () => (
    <div className="splash">
        <Link to="/" className="logo">kanary</Link>

        <Link className="login" to="/login">LOG IN</Link>
        
        <div className="content">
            <h1 className="header-content">
                Enjoy Thoughtful Entertainment
            </h1>
            <p className="body-content">
                Stream thousands of films for free, thanks to the generous 
                support of your public library or university
            </p>
            <Link to="/signup" className="signup-link-content">
                <h1>GET STARTED</h1>
            </Link>
        </div>

        <img src={window.splash} />
    </div>
);

export default Splash;