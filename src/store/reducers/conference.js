const initialState = {
    conferenceInfo: [],
    detail: {}
};
const conferenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETCONFERENCE_REQUEST":
            return {
                ...state,
            };

        case "GETCONFERENCE_SUCCESS":
            return {
                ...state,
                conferenceInfo: action.payload,
            };
        case "GETCONFERENCE_FAIL":
            return {
                ...state,
            };
        case "GETDETAIL_REQUEST":
            return {
                ...state,
            };
        case "GETDETAIL_SUCCESS":
            return {
                ...state,
                detail: action.payload,
            };
        case "GETDETAIL_FAIL":
            return {
                ...state,
            };
        default:
            return state;
    }
};
export default conferenceReducer;
