export const JOIN_REQUEST = "JOIN_REQUEST";
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_FAIL = "JOIN_FAIL";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const SERVICE_REQUEST = "SERVICE_REQUEST";
export const SERVICE_SUCCESS = "SERVICE_SUCCESS";
export const SERVICE_FAIL = "SERVICE_FAIL";

export const GITHUB_LOGIN_REQUEST = "GITHUB_LOGIN_REQUEST";
export const GITHUB_LOGIN_SUCCESS = "GITHUB_LOGIN_SUCCESS";
export const GITHUB_LOGIN_FAIL = "GITHUB_LOGIN_FAIL";

export const ME_REQUEST = "ME_REQUEST";
export const ME_SUCCESS = "ME_SUCCESS";
export const ME_FAIL = "ME_FAIL";

export const FAVOR_REQUEST = "FAVOR_REQUEST";
export const FAVOR_SUCCESS = "FAVOR_SUCCESS";
export const FAVOR_FAIL = "FAVOR_FAIL";

export const PASSWORD_MODIFY_REQUEST = "PASSWORD_MODIFY_REQUEST";
export const PASSWORD_MODIFY_SUCCESS = "PASSWORD_MODIFY_SUCCESS";
export const PASSWORD_MODIFY_FAIL = "PASSWORD_MODIFY_FAIL";

export const ALARM_MODIFY_REQUEST = "ALARM_MODIFY_REQUEST";
export const ALARM_MODIFY_SUCCESS = "ALARM_MODIFY_SUCCESS";
export const ALARM_MODIFY_FAIL = "ALARM_MODIFY_FAIL";

//me
export const meRequestAction = () => ({
    type: ME_REQUEST,
});
export const meSuccessAction = data => ({
    type: ME_SUCCESS,
    payload: data,
});
export const meFailAction = () => ({
    type: ME_FAIL,
});

//join
export const joinRequestAction = data => ({
    type: JOIN_REQUEST,
    payload: data,
});
export const joinSuccessAction = data => ({
    type: JOIN_SUCCESS,
    payload: data,
});
export const joinFailAction = () => ({
    type: JOIN_FAIL,
});

//login
export const loginRequestAction = data => ({
    type: LOGIN_REQUEST,
    payload: data,
});
export const loginSuccessAction = data => ({
    type: LOGIN_SUCCESS,
    payload: data,
});
export const loginFailAction = () => ({
    type: LOGIN_FAIL,
});

//logout
export const logoutRequestAction = () => ({
    type: LOGOUT_REQUEST,
});
export const logoutSuccessAction = () => ({
    type: LOGOUT_SUCCESS,
});
export const logoutFailAction = () => ({
    type: LOGOUT_FAIL,
});

//service center
export const serviceRequestAction = data => ({
    type: SERVICE_REQUEST,
    payload: data,
});
export const serviceSuccessAction = data => ({
    type: SERVICE_SUCCESS,
});
export const serviceFailAction = () => ({
    type: SERVICE_FAIL,
});

//github login
export const githubLoginRequestAction = data => ({
    type: GITHUB_LOGIN_REQUEST,
    payload: data,
});
export const githubLoginSuccessAction = () => ({
    type: GITHUB_LOGIN_SUCCESS,
});
export const githubLoginFailAction = () => ({
    type: GITHUB_LOGIN_FAIL,
});

//즐겨찾기
export const favorRequestAction = data => ({
    type: FAVOR_REQUEST,
    payload: data,
});
export const favorSuccessAction = data => ({
    type: FAVOR_SUCCESS,
    payload: data,
});
export const favorFailAction = () => ({
    type: FAVOR_FAIL,
});

//modify password
export const passwordModifyRequestAction = data => ({
    type: PASSWORD_MODIFY_REQUEST,
    payload: data,
});
export const passwordModifySuccessAction = () => ({
    type: PASSWORD_MODIFY_SUCCESS,
});
export const passwordModifyFailAction = () => ({
    type: PASSWORD_MODIFY_FAIL,
});

//modify email alarm
export const alarmModifyRequestAction = data => ({
    type: ALARM_MODIFY_REQUEST,
    payload: data,
});
export const alarmModifySuccessAction = data => ({
    type: ALARM_MODIFY_SUCCESS,
    payload: data,
});
export const alarmModifyFailAction = () => ({
    type: ALARM_MODIFY_FAIL,
});
