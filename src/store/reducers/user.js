import { handleActions } from "redux-actions";

const initialState={
    isJoined:false,
    isJoining:false,
    isLoggedIn:false,
    isLoggingIn:false,
    isLoggingout:false,
    userInfo:null,
};

const userReducer = handleActions({
    'JOIN_REQUEST': (state, action) => {
        return{
            ...state,
            isJoined:false,
            isJoining:true,
        };
    },
    'JOIN_SUCCESS': (state, action) => {
        return{
            ...state,
            userInfo : action.payload,
            isJoined:true,
            isJoining:false,
        };
    },
    'JOIN_FAIL': (state, action) =>{
        return{
            ...state,
            isJoining:false,
        };
    },
    'LOGIN_REQUEST': (state, action) =>{
        return{
            ...state,
            isLoggedIn:false,
            isLoggingIn:true,
        };
    },
    'LOGIN_SUCCESS': (state, action) =>{
        return{
            ...state,
            userInfo : action.payload,  
            isLoggedIn:true,
            isLoggingIn:false,
        };
    },
    'LOGIN_FAIL': (state, action) =>{
        return{
            ...state,
            isLoggingIn:false,
        };
    },
    'GITHUB_LOGIN_REQUEST': (state, action) =>{
        return{
            ...state,
            isLoggedIn:false,
            isLoggingIn:true,
        };
    },
    'GITHUB_LOGIN_SUCCESS': (state, action) =>{
        return{
            ...state,
            userInfo : action.payload,  
            isLoggedIn:true,
            isLoggingIn:false,
        };
    },
    'GITHUB_LOGIN_FAIL': (state, action) =>{
        return{
            ...state,
            isLoggingIn:false,
        };
    },
    'LOGOUT_REQUEST': (state, action) =>{
        return{
            ...state,
            isLoggingout:true,
        };
    },
    'LOGOUT_SUCCESS': (state, action) =>{
        return{
            ...state,
            userInfo : null,
            isLoggedIn:false,
        };
    },
    'LOGOUT_FAIL': (state, action) =>{
        return{
            ...state,
            isLoggingout:false,
        };
    },
    

}, initialState);

export default userReducer;