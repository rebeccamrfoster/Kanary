import React from "react";
import { ReactDOM } from "react-dom";

class Popup extends React.Component {
    constructor(props) {
        super(props);
    }

    // clearPopup() {
        // $("#popup").fadeOut(3000);

        // const div = document.getElementById("popup");
        // document.querySelector(".popup").classList.add("hide");
        // div.parentNode.removeChild(div);
    // }

    // componentDidMount() {
        // const div = document.getElementById("popup");
        // document.querySelector(".popup").classList.add("show");
        // setTimeout(this.clearPopup, 3000);
    // }

    componentDidMount() {
        let el = document.querySelector('.popup');
        el.classList.add('fade-in');
    }

    render() {
        const { added, title } = this.props;

        return(
            <div className="popup">
                <div className="header-popup">
                    <h1>Video {added ? "added" : "removed"}</h1>
                    <img src={window.close_icon} onClick={this.clearPopup} />
                </div>
                <p className="body-popup">
                    <i>{title}</i> has been 
                    {added ? " added to" : " removed from"} your watchlist
                </p>
            </div>
        )
    }
}

export default Popup;