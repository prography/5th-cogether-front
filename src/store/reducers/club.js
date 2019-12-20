import { handleActions } from "redux-actions";

const initialState = {
    clubInfo: [],
    detail: {},
};

const clubReducer =  handleActions({
    'GETCLUB_REQUEST': (state, action) => {
        return {
            ...state,
        };
    },
    'GETCLUB_SUCCESS': (state, action) => {
        return {
            ...state,
            clubInfo: action.payload,
        };
    },
    'GETCLUB_FAIL': (state, action) => {
        return {
            ...state,
        };
    },
    'GETDETAIL_REQUEST': (state, action) => {
        return {
            ...state,
        };
    },
    'GETDETAIL_SUCCESS': (state, action) => {
        return {
            ...state,
            detail: action.payload,
        };
    },
    'GETDETAIL_FAIL': (state, action) => {
        return {
            ...state,
        };
    },
}, initialState);

export default clubReducer;
