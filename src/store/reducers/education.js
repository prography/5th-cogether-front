const initialState = {
    educationInfo: [],
    detail: {}
};
const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETEDUCATION_REQUEST":
            return {
                ...state
            };

        case "GETEDUCATION_SUCCESS":
            return {
                ...state,
                educationInfo: action.payload
            };
        case "GETEDUCATION_FAIL":
            return {
                ...state
            };
        case "GETDETAIL_REQUEST":
            return {
                ...state
            };
        case "GETDETAIL_SUCCESS":
            return {
                ...state,
                detail: action.payload
            };
        case "GETDETAIL_FAIL":
            return {
                ...state
            };
        default:
            return state;
    }
};
export default educationReducer;
