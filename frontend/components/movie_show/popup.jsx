import React, { useState, useEffect } from "react";

const Popup = ({ added, title, clearPopup }) => {
    // const [fadeProp, setFadeProp] = useState({ fade: "" });

    const el = document.querySelector(".popup");
    if (el) clearPopup();

    const handleClearPopup = () => {
        const el = document.querySelector(".popup");
        el.id = "fade-out";
        setTimeout(() => {
            clearPopup();
        }, 600)
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            const el = document.querySelector(".popup");
            if (el.id === "") {
                el.id = "fade-in"
            }
        }, 200);
    })

    return (
        <div id="" className="popup" onClick={handleClearPopup}>
            <div className="header-popup">
                <h1>Video {added ? "added" : "removed"}</h1>
                <img src={window.close_icon} onClick={handleClearPopup} />
            </div>
            <p className="body-popup">
                <i>{title}</i> has been 
                {added ? " added to" : " removed from"} your watchlist
            </p>
        </div>
    )
}

export default Popup;