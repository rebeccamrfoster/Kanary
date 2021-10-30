import React from "react";
import { Route } from "react-router";
import Navbar from "./navbar";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";

const App = () => {
    return (
        <div>
            <Navbar />

            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
        </div>

    )
};

export default App;