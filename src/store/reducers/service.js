import { handleActions } from "redux-actions";

const initialState = {
    intro: {},
    freq: {},
    help: {}
};

const serviceReducer = handleActions(
    {
        INTRO_REQUEST: (state, action) => {
            return {
                ...state
            };
        },
        INTRO_SUCCESS: (state, action) => {
            return {
                ...state,
                intro: action.payload
            };
        },
        INTRO_FAIL: (state, action) => {
            return {
                ...state
            };
        },
        FREQ_REQUEST: (state, action) => {
            return {
                ...state
            };
        },
        FREQ_SUCCESS: (state, action) => {
            return {
                ...state,
                freq: action.payload
            };
        },
        FREQ_FAIL: (state, action) => {
            return {
                ...state
            };
        },
        HELP_REQUEST: (state, action) => {
            return {
                ...state
            };
        },
        HELP_SUCCESS: (state, action) => {
            return {
                ...state,
                help: action.payload
            };
        },
        HELP_FAIL: (state, action) => {
            return {
                ...state
            };
        }
    },
    initialState
);

export default serviceReducer;
