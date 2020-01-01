import { handleActions } from "redux-actions";

const initialState = {
    educationInfo: [],
    detail: {},
};

const educationReducer = handleActions({

    'GETEDUCATION_REQUEST': (state, action) => {
        return{
            ...state,
        };
    },
    'GETEDUCATION_SUCCESS': (state, action) => {
        return{
            ...state,
            educationInfo: action.payload,
        };
    },
    'GETEDUCATION_FAIL': (state, action) => {
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

export default educationReducer;
