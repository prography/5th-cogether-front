import { combineReducers } from 'redux';
import clubReducer from './club';
import conferenceReducer from './conference';
import educationReducer from './education';
import userReducer from './user';
import meReducer from './auth';

const rootReducer = combineReducers({
    clubReducer,
    conferenceReducer,
    educationReducer,
    userReducer,
    meReducer,
});

export default rootReducer;