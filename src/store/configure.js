import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';


const env = process.env.NODE_ENV;
const history = createBrowserHistory();
const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();  
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const configure = () => {
    const composeEnhancers =
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewares = applyMiddleware(sagaMiddleware/*, logger*/);
    const store = createStore(
        rootReducer,
        composeEnhancers(middlewares),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configure;
