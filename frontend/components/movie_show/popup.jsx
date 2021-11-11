import React, { useState, useEffect, useReducer } from "react";
// import PropTypes from 'prop-types';
// import { ReactDOM } from "react-dom";

// const RESET_POPUP_STATE = "RESET_POPUP_STATE";

// const initialState = { fade: "" };

// const popupsReducer = (state, action) => {
//     if (action.type === RESET_POPUP_STATE) return initialState;
// }

// const Popup = ({ added, title }) => {
//     const [fadeProp, setFadeProp] = useState({ fade: "" });
//     const [state, dispatch] = useReducer(popupsReducer, fadeProp);

//     // const clearState = () => {
//     //     setFadeProp({ fade: "" });
//     // }

//     useEffect(() => {
//         debugger
//         const delay = setTimeout(() => {
//             if (fadeProp.fade === "") {
//                 setFadeProp({ fade: "fade-in" });
//             }
//             else if (fadeProp.fade === "fade-in") {
//                 setFadeProp({ fade: "fade-out" });
//             }

//             setTimeout(() => {
//                 dispatch({ type: RESET_POPUP_STATE });
//                 const el = document.querySelector(".popup");
//                 debugger
//                 el.id = "";
//             }, 5000);
            
//         }, 2000);

//         return () => {
//             clearTimeout(delay);
//         }
//     }, [fadeProp])

//     return (
//         <div id={`${fadeProp.fade}`} className="popup">
//             <div className="header-popup">
//                 <h1>Video {added ? "added" : "removed"}</h1>
//                 <img src={window.close_icon} />
//             </div>
//             <p className="body-popup">
//                 <i>{title}</i> has been 
//                 {added ? " added to" : " removed from"} your watchlist
//             </p>
//         </div>
//     )
// }

class Popup extends React.Component {
    constructor(props) {
        super(props);
        // this.newPopup = false;
        this.state = { fade: "" };
        this.decider = this.props.added;
    }

    componentDidMount() {
        // debugger
        this.setState({ fade: "fade-in" });

        // setTimeout(() => {
        //     if (this.state.fade === "") {
        //         this.setState({ fade: "fade-in" });
        //     }
        //     else if (this.state.fade === "fade-in") {
        //         this.setState({ fade: "fade-out" });
        //     }

        //     // setTimeout(() => {
        //     //     dispatch({ type: RESET_POPUP_STATE });
        //     //     const el = document.querySelector(".popup");
        //     //     debugger
        //     //     el.id = "";
        //     // }, 5000);

        // }, 2000);
    }

    componentDidUpdate(prevProps, prevState) {
        setTimeout(() => {
            if (this.state.fade === "") {
                if (prevProps.added !== this.decider) {
                    this.setState({ fade: "fade-in" });
                }
                else {
                    this.decider = !this.decider;
                }
            }
            else if (this.state.fade === "fade-in") {
                this.setState({ fade: "fade-out" });
            }
            else if (this.state.fade === "fade-out") {
                this.setState({ fade: "" });

                // const el = document.querySelector(".popup");
                // el.id = "";
            }

            // setTimeout(() => {
            //     dispatch({ type: RESET_POPUP_STATE });
            //     const el = document.querySelector(".popup");
            //     debugger
            //     el.id = "";
            // }, 5000);

        }, 2000);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     debugger
    //     if (nextState.fade === "" && !this.newPopup) {
    //         debugger
    //         this.newPopup = true;
    //         return false;
    //     }
    //     else {
    //         debugger
    //         this.newPopup = false;
    //         return true;
    //     }
    // }

    render() {
        const { added, title } = this.props;

        return (
            <div id={`${this.state.fade}`} className="popup">
                <div className="header-popup">
                    <h1>Video {added ? "added" : "removed"}</h1>
                    <img src={window.close_icon} />
                </div>
                <p className="body-popup">
                    <i>{title}</i> has been
                    {added ? " added to" : " removed from"} your watchlist
                </p>
            </div>
        )
    }
}



// onClick = { this.clearPopup }










// class Popup extends React.Component {
//     constructor(props) {
//         super(props);
//     }

    // componentDidMount() {
    //     let el = document.querySelector('.popup');
    //     el.classList.add('fade-in');
    // }

//     render() {
//         const { added, title } = this.props;

//         return(
//             <div className="popup">
//                 <div className="header-popup">
//                     <h1>Video {added ? "added" : "removed"}</h1>
//                     <img src={window.close_icon} onClick={this.clearPopup} />
//                 </div>
//                 <p className="body-popup">
//                     <i>{title}</i> has been 
//                     {added ? " added to" : " removed from"} your watchlist
//                 </p>
//             </div>
//         )
//     }
// }

export default Popup;