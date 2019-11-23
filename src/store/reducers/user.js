const initialState={
    isJoined:false,
    isJoining:false,
    isLoggedIn:false,
    isLoggingIn:false,
    isLoggingout:false,
    userInfo:null,
    token:''
};

const userReducer = (state=initialState, action) =>{
    switch(action.type){
        //join
        case 'JOIN_REQUEST': 
            return{
                ...state,
                isJoined:false,
                isJoining:true
            };
        case 'JOIN_SUCCESS': 
            return{
                ...state,
                userInfo : action.payload,
                isJoined:true,
                isJoining:false
            };
        case 'JOIN_FAIL': 
            return{
                ...state,
                isJoining:false
            };

        //login
        case 'LOGIN_REQUEST': 
            return{
                ...state,
                isLoggedIn:false,
                isLoggingIn:true,
            };
        case 'LOGIN_SUCCESS': 
            return{
                ...state,
                userInfo : action.payload,  
                isLoggedIn:true,
                isLoggingIn:false,
            };
        case 'LOGIN_FAIL': 
            return{
                ...state,
                isLoggingIn:false,
            };

        //logout
        case 'LOGOUT_REQUEST': 
            return{
                ...state,
                isLoggingout:true
            };
        case 'LOGOUT_SUCCESS': 
            return{
                ...state,
                userInfo : null,
                isLoggedIn:false
            };
        case 'LOGOUT_FAIL': 
            return{
                ...state,
                isLoggingout:false
            };
            
        default:
            return state;
    }
}

export default userReducer;