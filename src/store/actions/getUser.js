export const JOIN_REQUEST = 'JOIN_REQUEST';
export const JOIN_SUCCESS = 'JOIN_SUCCESS';
export const JOIN_FAIL = 'JOIN_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const GITHUB_LOGIN_REQUEST = 'GITHUB_LOGIN_REQUEST';
export const GITHUB_LOGIN_SUCCESS = 'GITHUB_LOGIN_SUCCESS';
export const GITHUB_LOGIN_FAIL = 'GITHUB_LOGIN_FAIL';

//join
export const joinRequestAction =(data)=> ({
    type:JOIN_REQUEST,
    payload:data,
});
export const joinSuccessAction =(data)=> ({
    type:JOIN_SUCCESS,
    payload:data,
});
export const joinFailAction =()=> ({
    type:JOIN_FAIL,
});

//login
export const loginRequestAction =(data)=> ({
    type:LOGIN_REQUEST,
    payload:data,
});
export const loginSuccessAction =(data)=> ({
    type:LOGIN_SUCCESS,
    payload:data,
});
export const loginFailAction =()=> ({
    type:LOGIN_FAIL,
});

//logout
export const logoutRequestAction =()=> ({
    type:LOGOUT_REQUEST,
});
export const logoutSuccessAction =()=> ({
    type:LOGOUT_SUCCESS,
});
export const logoutFailAction =()=> ({
    type:LOGOUT_FAIL,
});

//github login
export const githubLoginRequestAction =(data)=> ({
    type:GITHUB_LOGIN_REQUEST,
    payload:data,
});
export const githubLoginSuccessAction =(data)=> ({
    type:GITHUB_LOGIN_SUCCESS,
    payload:data,
});
export const githubLoginFailAction =()=> ({
    type:GITHUB_LOGIN_FAIL,
});
