import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

import ScrollToTop from "./scroll_to_top";
import Splash from "./splash/splash";
import NavbarContainer from "./navbar/navbar_container";
import Footer from "./footer/footer";

import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import MovieShowContainer from "./movie_show/movie_show_container";
import MovieIndexContainer from "./movie_index/movie_index_container";
import GenreIndexContainer from "./genre_index/genre_index_container";
import WatchlistIndexContainer from "./watchlist_index/watchlist_index_container";
import SearchResultIndexContainer from "./search/search_result_index/search_result_index_container";

const App = () => (
    <div>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={Splash} />
            <NavbarContainer />
        </Switch>

        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/movies/:movieId" component={MovieShowContainer} />
            <ProtectedRoute path="/movies" component={MovieIndexContainer} />
            <ProtectedRoute path="/genres/:genreId" component={GenreIndexContainer} />
            <ProtectedRoute path="/watchlists" component={WatchlistIndexContainer} />
            <ProtectedRoute path="/search/:query" component={SearchResultIndexContainer} />
        </Switch>

        <ProtectedRoute component={Footer} />
    </div>
);

export default App;