import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

// Router
import { routerMiddleware } from "connected-react-router";
import reducer, { history } from "./index";
import sagaConfigure from "api";
const env = process.env.NODE_ENV;

const server = ""; //

const envProps = {
    HOST_PROTOCOL: window.location.protocol,
    HOST_DOMAIN: window.location.hostname, // 도메인
    HOST_PORT: window.location.port,
    HOST_NAME: window.location.host, // 도메인 + 포트
    MEDIA_URL: "",
    SERVER_URL: server,
    acceptFiles: ".pdf, .jpg, .jpeg, .png, .doc, .docx, .hwp",

    // colorList: ["#ef5350", "#aa00ff", "#5c6bc0", "#0091ea", "#ff80ab", "#26a69a", "#ffee58", "#ff9100", "#8d6e63", "#263238"]
    colorList: ["#ef5350", "#0091ea", "#26a69a", "#ff80ab", "#ffee58", "#5c6bc0", "#aa00ff", "#ff9100", "#8d6e63", "#263238"],

    fetchHeader: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type"
    }
};

history.listen((location, action) => {
    if (location.pathname !== "/index") {
        window.scrollTo(0, 0);
    }
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);

    // console.log(JSON.stringify({ env, envProps }));
}

const combine = combineReducers({ ...reducer });

let store;

if (env === "development") {
    store = initialState => {
        const store = createStore(combine, composeWithDevTools(applyMiddleware(...middlewares)));
        sagaConfigure(sagaMiddleware);
        return store;
    };
} else {
    store = initialState => {
        const store = createStore(combine, applyMiddleware(...middlewares));
        sagaConfigure(sagaMiddleware);
        return store;
    };
}

export { history, envProps };

export default store();
