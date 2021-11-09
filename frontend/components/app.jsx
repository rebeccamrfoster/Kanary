import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import MovieIndexContainer from "./movie_index/movie_index_container";
import MovieShowContainer from "./movie_show/movie_show_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import { Route, Switch } from "react-router";
import WatchlistIndexContainer from "./watchlist_index/watchlist_index_container";
import Splash from "./splash/splash";
import Footer from "./footer/footer";
import SearchResultsIndexContainer from "./search/search_result_index/search_result_index_container";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Splash} />
                <NavbarContainer />
            </Switch>

            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/movies/:movieId" component={MovieShowContainer} />
                <ProtectedRoute path="/movies" component={MovieIndexContainer} />
                <ProtectedRoute path="/watchlists" component={WatchlistIndexContainer} />
                <ProtectedRoute path="/search/:query" component={SearchResultsIndexContainer} />
            </Switch>

            <ProtectedRoute component={Footer} />
        </div>

    )
};

export default App;