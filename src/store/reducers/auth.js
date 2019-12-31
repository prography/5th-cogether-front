import { handleActions } from "redux-actions";

const initialState={
    meInfo: null,
};

const meReducer = handleActions({
    'ME_REQUEST': (state, action) => {
        return{
            ...state,
        };
    },
    'ME_SUCCESS': (state, action) => {
        return{
            ...state,
            meInfo: action.payload,   //username
        };
    },
    'ME_FAIL': (state, action) =>{
        return{
            ...state,
            meInfo: null,
        };
    },

}, initialState);

export default meReducer;