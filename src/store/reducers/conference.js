import { handleActions } from "redux-actions";

const initialState = {
    conferenceInfo: [],
    detail: {},
};

const conferenceReducer = handleActions({

    'GETCONFERENCE_REQUEST': (state, action) => {
        return{
            ...state,
        };
    },
    'GETCONFERENCE_SUCCESS': (state, action) => {
        return{
            ...state,
            conferenceInfo: action.payload,
        };
    },
    'GETCONFERENCE_FAIL': (state, action) => {
        return{
            ...state,
        };
    },
    'GETDETAIL_REQUEST': (state, action) => {
        return{
            ...state,
        };
    },
    'GETDETAIL_SUCCESS': (state, action) => {
        return{
            ...state,
            detail: action.payload,
        };
    },
    'GETDETAIL_FAIL': (state, action) => {
        return{
            ...state,
        };
    },
    
}, initialState);

export default conferenceReducer;
