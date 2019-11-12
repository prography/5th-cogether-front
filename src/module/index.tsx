import clubReducer, { clubModuleState } from "./clubModule";
import eduReducer, { eduModuleState } from "./eduModule";
import confReducer, { confModuleState } from "./confModule";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const reducer = {
    clubs: clubReducer,
    edus: eduReducer,
    confs: confReducer,
    router: connectRouter(history)
};

export interface moduleProps {
    clubs: clubModuleState;
    edus: eduModuleState;
    confs: confModuleState;
}

export default reducer;
