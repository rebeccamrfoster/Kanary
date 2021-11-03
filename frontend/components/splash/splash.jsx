import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
    return (
        <div className="splash">
            <Link className="login" to="/login">
                <h1>LOG IN</h1>
            </Link>
            <div className="content">
                <div className="content__container">
                    <h1 className="content__logo">Kanary</h1>
                    <h1 className="content__header">Enjoy Thoughtful Entertainment</h1>
                    <p className="content__body">Stream thousands of films for free, thanks to the generous support of your public library or university</p>
                </div>
            </div>
            <img src={window.splashUrl} />
            {/* <img src="https://static.kanopy.com/images/webshop-landing/hero-toppers/US/pl/1d-landing-page-hero-us-pl-1-moonlight.jpg" /> */}
            {/* <div id="bg">
                <img className="hero" src="https://kanary-bucket.s3.us-east-2.amazonaws.com/splash_1.jpg" />
            </div> */}
        </div>
    )
};

export default Splash;