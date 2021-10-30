import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router";

const Auth = props => {
    const { component: Component, path, loggedIn, exact } = props;

    return (
        <Route path={path}
               exact={exact}
               render={props => (
                   loggedIn ? <Redirect to="/" /> : <Component {...props} />
               )} />
    )
};

const Protected = props => {
    const { component: Component, path, loggedIn, exact } = props;

    return (
        <Route path={path}
               exact={exact}
               render={props => (
                   loggedIn ? <Component {...props} /> : <Redirect to="/" />
               )} />
    )
};

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    }
};

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));