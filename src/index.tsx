import React from "react";
import ReactDOM from "react-dom";

// router
import { Provider } from "react-redux";
import configure from "./store/configure";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store=configure();

ReactDOM.render(
    <Provider store={store}>
            <App />
            {/* <Login /> */}
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
