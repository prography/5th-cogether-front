import { handleActions } from "redux-actions";

const initialState = {
    isJoined: false,
    isJoining: false,
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingout: false,
    userInfo: null,
    list: {},
    signedUp: null,
    meName: null,
    mePhoto: null,
    meLogin: null,
    meSubscribe: true,
    favor: [],
    passwordEdited: false,
    alarmEdited: false,
};

const userReducer = handleActions({

    'JOIN_REQUEST': (state, action) => {
        return{
            ...state,
            isJoined: false,
            isJoining: true,
        };
    },
    'JOIN_SUCCESS': (state, action) => {
        return{
            ...state,
            signedUp: action.payload,
            isJoined: true,
            isJoining: false,
        };
    },
    'JOIN_FAIL': (state, action) =>{
        return{
            ...state,
            isJoining: false,
        };
    },
    'LOGIN_REQUEST': (state, action) =>{
        return{
            ...state,
            isLoggedIn: false,
            isLoggingIn: true,
        };
    },
    'LOGIN_SUCCESS': (state, action) =>{
        return{
            ...state,
            userInfo: action.payload,  
            isLoggedIn: true,
            isLoggingIn: false,
        };
    },
    'LOGIN_FAIL': (state, action) =>{
        return{
            ...state,
            isLoggingIn: false,
        };
    },
    'LOGOUT_REQUEST': (state, action) =>{
        return{
            ...state,
            isLoggingout: true,
        };
    },
    'LOGOUT_SUCCESS': (state, action) =>{
        return{
            ...state,
            userInfo: null,
            meName: null,
            mePhoto: null,
            meLogin: null,
            isLoggedIn: false,
        };
    },
    'LOGOUT_FAIL': (state, action) =>{
        return{
            ...state,
            isLoggingout: false,
        };
    },
    'SERVICE_REQUEST': (state, action) => {
        return {
            ...state,
        };
    },
    'SERVICE_SUCCESS': (state, action) => {
        return {
            ...state,
            list: action.payload,
        };
    },
    'SERVICE_FAIL': (state, action) => {
        return {
            ...state,
        };
    },
    'GITHUB_LOGIN_REQUEST': (state, action) =>{
        return{
            ...state,
            isLoggedIn: false,
            isLoggingIn: true,
        };
    },
    'GITHUB_LOGIN_SUCCESS': (state, action) =>{
        return{
            ...state, 
            isLoggedIn: true,
            isLoggingIn: false,
        };
    },
    'GITHUB_LOGIN_FAIL': (state, action) =>{
        return{
            ...state,
            isLoggingIn: false,
        };
    },
    'ME_REQUEST': (state, action) => {
        return{
            ...state,
        };
    },
    'ME_SUCCESS': (state, action) => {
        return{
            ...state,
            meName: JSON.stringify(action.payload.username),   // username
            mePhoto: action.payload.social_avatar,   // profile photo
            meLogin: action.payload.login_method,  // email or github 
            meSubscribe: action.payload.subscribe, // email alarm subscribe : true or false
        };
    },
    'ME_FAIL': (state, action) =>{
        return{
            ...state,
            meName: null,
            mePhoto: null,
            meLogin: null,
        };
    },
    'FAVOR_REQUEST': (state, action) => {
        return {
            ...state,
        };
    },
    'FAVOR_SUCCESS': (state, action) => {
        return {
            ...state,
            favor: action.payload,
        };
    },
    'FAVOR_FAIL': (state, action) => {
        return {
            ...state,
        };
    },
    'PASSWORD_MODIFY_REQUEST': (state, action) => {
        return {
            ...state,
        };
    },
    'PASSWORD_MODIFY_SUCCESS': (state, action) => {
        return {
            ...state,
            passwordEdited: true,
        };
    },
    'PASSWORD_MODIFY_FAIL': (state, action) => {
        return {
            ...state,
        };
    },
    'ALARM_MODIFY_REQUEST': (state, action) => {
        return {
            ...state,
        };
    },
    'ALARM_MODIFY_SUCCESS': (state, action) => {
        return {
            ...state,
            meSubscribe: action.payload,
            alarmEdited: true,
        };
    },
    'ALARM_MODIFY_FAIL': (state, action) => {
        return {
            ...state,
        };
    },

}, initialState);

export default userReducer;
