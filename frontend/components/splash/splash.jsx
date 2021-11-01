import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
    return (
        <div>
            <h1>Kanary</h1>
            <Link to="/login">LOG IN</Link>
            {/* <img src="https://static.kanopy.com/images/webshop-landing/hero-toppers/US/pl/1d-landing-page-hero-us-pl-1-moonlight.jpg" /> */}
        </div>
    )
};

export default Splash;