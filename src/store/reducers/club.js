const initialState = {
    clubInfo: [],
    detail: {}
};
const clubReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETCLUB_REQUEST":
            return {
                ...state
            };

        case "GETCLUB_SUCCESS":
            return {
                ...state,
                clubInfo: action.payload
            };
        case "GETCLUB_FAIL":
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
export default clubReducer;
