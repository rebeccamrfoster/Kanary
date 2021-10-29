import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { createUser, createSession, deleteSession } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);

    window.createUser = createUser;
    window.createSession = createSession;
    window.deleteSession = deleteSession;
    window.store = store;
})