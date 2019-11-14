const initialState={
    conferenceInfo:[]
}
const conferenceReducer= (state=initialState, action) => {

    switch(action.type){
        case 'GETCONFERENCE_REQUEST': 
            return{
                ...state
            };

        case 'GETCONFERENCE_SUCCESS': 
            return{
                ...state,
                conferenceInfo : action.payload
            };
        case 'GETCONFERENCE_FAIL': 
            return{
                ...state
            };
        default:
            return state;
    }
}
export default conferenceReducer;