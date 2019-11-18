import { combineReducers } from 'redux';
import clubReducer from './club';
import conferenceReducer from './conference';
import educationReducer from './education';
import userReducer from './user';

const rootReducer = combineReducers({
  clubReducer,
  conferenceReducer,
  educationReducer,
  userReducer
});

export default rootReducer;