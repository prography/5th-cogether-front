import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { createLogger } from "redux-logger";

const env = process.env.NODE_ENV;
const history = createBrowserHistory();
const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();   // saga 미들웨어를 생성
const middlewares = [sagaMiddleware, routerMiddleware(history)];

// 스토어에 mount
const configure = () => {
    const store = createStore(
        rootReducer,
        // redux의 미들웨어로 sagaMiddleware를 사용
        applyMiddleware(sagaMiddleware, logger)
    );

    // saga 실행
    sagaMiddleware.run(rootSaga);

    return store;
};

// if (env === "development") {
//     const { logger } = require("redux-logger");
//     middlewares.push(logger);
// }
export default configure;
