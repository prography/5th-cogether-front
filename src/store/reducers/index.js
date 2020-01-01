import { combineReducers } from "redux";
import clubReducer from "./club";
import conferenceReducer from "./conference";
import educationReducer from "./education";
import userReducer from "./user";
import meReducer from "./auth";
import serviceReducer from "./service";

const rootReducer = combineReducers({
    clubReducer,
    conferenceReducer,
    educationReducer,
    userReducer,
    meReducer,
    serviceReducer
});

export default rootReducer;
