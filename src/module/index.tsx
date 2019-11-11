import clubReducer, { clubModuleState } from "./clubModule";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const reducer = {
    clubs: clubReducer,
    router: connectRouter(history)
};

export interface moduleProps {
    clubs: clubModuleState;
}

export default reducer;
