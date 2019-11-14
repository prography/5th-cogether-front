import { combineReducers } from 'redux';
import clubReducer from './club';
import conferenceReducer from './conference';
import educationReducer from './education';

const rootReducer = combineReducers({
  clubReducer,
  conferenceReducer,
  educationReducer
});

export default rootReducer;