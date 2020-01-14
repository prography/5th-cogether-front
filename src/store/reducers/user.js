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
    meInfo: null,
    favor: [],
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
            signedUp: action.payload,
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
            userInfo: action.payload,  
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
    'LOGOUT_REQUEST': (state, action) =>{
        return{
            ...state,
            isLoggingout:true,
        };
    },
    'LOGOUT_SUCCESS': (state, action) =>{
        return{
            ...state,
            userInfo: null,
            meInfo: null,
            isLoggedIn:false,
        };
    },
    'LOGOUT_FAIL': (state, action) =>{
        return{
            ...state,
            isLoggingout:false,
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
            isLoggedIn:false,
            isLoggingIn:true,
        };
    },
    'GITHUB_LOGIN_SUCCESS': (state, action) =>{
        return{
            ...state, 
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
    'ME_REQUEST': (state, action) => {
        return{
            ...state,
        };
    },
    'ME_SUCCESS': (state, action) => {
        return{
            ...state,
            meInfo: action.payload,   //username
        };
    },
    'ME_FAIL': (state, action) =>{
        return{
            ...state,
            meInfo: null,
        };
    },
    'USER_EDIT_REQUEST': (state, action) => {
        return{
            ...state,
        };
    },
    'USER_EDIT_SUCCESS': (state, action) => {
        return{
            ...state,
            edited: true,
        };
    },
    'USER_EDIT_FAIL': (state, action) =>{
        return{
            ...state,
        };
    },
    'FAVOR_REQUEST': (state, action) => {
        return {
            ...state
        };
    },
    'FAVOR_SUCCESS': (state, action) => {
        return {
            ...state,
            favor: action.payload
        };
    },
    'FAVOR_FAIL': (state, action) => {
        return {
            ...state
        };
    },

}, initialState);

export default userReducer;
