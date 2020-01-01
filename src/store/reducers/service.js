const initialState = {
    intro: {},
    freq: {},
    help: {},
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INTRO_REQUEST":
            return {
                ...state,
            };
        case "INTRO_SUCCESS":
            return {
                ...state,
                intro: action.payload,
            };
        case "INTRO_FAIL":
            return {
                ...state,
            };
        case "FREQ_REQUEST":
            return {
                ...state,
            };
        case "FREQ_SUCCESS":
            return {
                ...state,
                freq: action.payload,
            };
        case "FREQ_FAIL":
            return {
                ...state,
            };
        case "HELP_REQUEST":
            return {
                ...state,
            };
        case "HELP_SUCCESS":
            return {
                ...state,
                help: action.payload,
            };
        case "HELP_FAIL":
            return {
                ...state,
            };
        default:
            return state;
    }
};
export default serviceReducer;
