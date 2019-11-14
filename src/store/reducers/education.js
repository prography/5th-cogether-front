const initialState={
    educationInfo:[]
}
const educationReducer= (state=initialState, action) => {

    switch(action.type){
        case 'GETEDUCATION_REQUEST': 
            return{
                ...state
            };

        case 'GETEDUCATION_SUCCESS': 
            return{
                ...state,
                educationInfo : action.payload
            };
        case 'GETEDUCATION_FAIL': 
            return{
                ...state
            };
        default:
            return state;
    }
}
export default educationReducer;