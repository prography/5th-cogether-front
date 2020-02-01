import React from "react";
import ReactDOM from "react-dom";

// router
import { Provider } from "react-redux";
import configure from "./store/configure";
import ReactGA from "react-ga";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = configure();
ReactGA.initialize("UA-156434695-1");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
