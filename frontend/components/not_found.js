import React from "react";

const NotFound = () => (
    <div className="not-found-container">
        <div className="not-found">
            <div className="meh">
                <img src={window.meh_icon} />
            </div>
            <h1 className="null-render-text">404</h1>
            <p className="null-render-text">Page Not Found</p>
        </div>
    </div>
);

export default NotFound;