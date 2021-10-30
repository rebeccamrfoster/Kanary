import React from "react";
import NavbarContainer from "./navbar/navbar";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import MovieIndexContainer from "./movie_index/movie_index_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import { Switch } from "react-router";

const App = () => {
    return (
        <div>
            <NavbarContainer />

            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/movies" component={MovieIndexContainer} />
            </Switch>
        </div>

    )
};

export default App;