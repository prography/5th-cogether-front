import { combineReducers } from "redux";
import clubReducer from "./club";
import conferenceReducer from "./conference";
import educationReducer from "./education";
import serviceReducer from "./service";
import userReducer from "./user";


const rootReducer = combineReducers({
    clubReducer,
    conferenceReducer,
    educationReducer,
    userReducer,
    serviceReducer,
});

export default rootReducer;
