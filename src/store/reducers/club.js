const initialState={
    clubInfo:[]
}
const clubReducer= (state=initialState, action) => {

    switch(action.type){
        case 'GETCLUB_REQUEST': 
            return{
                ...state
            };

        case 'GETCLUB_SUCCESS': 
            return{
                ...state,
                clubInfo : action.payload
            };
        case 'GETCLUB_FAIL': 
            return{
                ...state
            };
        default:
            return state;
    }
}
export default clubReducer;