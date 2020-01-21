import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    loginSuccessAction,
    LOGOUT_REQUEST,
    LOGOUT_FAIL,
    logoutRequestAction,
    logoutSuccessAction,
    JOIN_REQUEST,
    JOIN_FAIL,
    joinSuccessAction,
    GITHUB_LOGIN_REQUEST,
    GITHUB_LOGIN_FAIL,
    githubLoginSuccessAction,
    ME_REQUEST,
    ME_FAIL,
    meSuccessAction,
    FAVOR_REQUEST,
    FAVOR_FAIL,
    favorSuccessAction,
    PASSWORD_MODIFY_REQUEST,
    PASSWORD_MODIFY_FAIL,
    passwordModifySuccessAction,
    ALARM_MODIFY_REQUEST,
    ALARM_MODIFY_FAIL,
    alarmModifySuccessAction,
} from "../actions/User";
import { meRequestAction } from "../actions/User";
import swal from "sweetalert";

//login
function* getLoginData({ payload }) {
    try {
        const json = {
            username: payload.username,
            password: payload.password,
        };

        const responseBody = yield call([axios, "post"], "https://cogether.azurewebsites.net/account/api/token/", json);

        const accessToken = responseBody.data.access;
        const refreshToken = responseBody.data.refresh;
        if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            yield put(loginSuccessAction(JSON.stringify(json.username)));
            yield put(meRequestAction());
        }
    } catch (e) {
        yield put({ type: LOGIN_FAIL });
        swal("일치하는 회원 정보가 없습니다");
    }
}
function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, getLoginData);
}

//logout
function* getLogoutData() {
    try {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        yield put(logoutSuccessAction());
    } catch (e) {
        yield put({ type: LOGOUT_FAIL });
    }
}
function* watchLogout() {
    yield takeLatest(LOGOUT_REQUEST, getLogoutData);
}

//signup
function* getJoinData({ payload }) {
    try {
        const json = {
            username: payload.username,
            password1: payload.p1,
            password2: payload.p2,
        };

        const responseBody = yield call([axios, "post"], "https://cogether.azurewebsites.net/account/", json);
        if (responseBody.data) {
            yield put(joinSuccessAction(responseBody.data));
        }
    } catch (e) {
        yield put({ type: JOIN_FAIL });
        swal("이미 존재하는 이메일 입니다.");
    }
}
function* watchJoin() {
    yield takeLatest(JOIN_REQUEST, getJoinData);
}

//github login
function* getGithubLoginData({ payload }) {
    try {
        const responseBody = yield call([axios, "get"], "https://cogether.azurewebsites.net/account/login/github/callback/?code=".concat(payload));

        const accessToken = responseBody.data.access;
        const refreshToken = responseBody.data.refresh;
        if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            yield put(githubLoginSuccessAction());
            yield put(meRequestAction());
        }
    } catch (e) {
        yield put({ type: GITHUB_LOGIN_FAIL });
        swal(e.response.data.message);
    }
}
function* watchGithubLogin() {
    yield takeLatest(GITHUB_LOGIN_REQUEST, getGithubLoginData);
}

//me
function* getMeData() {
    try {
        const json = {
            token: localStorage.getItem("accessToken"),
        };
        const headerParams = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };

        const isExpired = yield call([axios, "post"], "https://cogether.azurewebsites.net/account/api/token/verify/", json);
        const userData = yield call([axios, "get"], "https://cogether.azurewebsites.net/account/retrieve-profile/", 
            { headers: headerParams });
        
        yield put(meSuccessAction(userData.data));
    } catch (e) {
        yield put({ type: ME_FAIL });
        yield put(logoutRequestAction());
    }
}
function* watchMe() {
    yield takeLatest(ME_REQUEST, getMeData);
}

//즐겨찾기
function* Favor({ payload }) {
    try {
        const headerParams = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        };
        //get favor
        if (payload.type === "get") {
            
            const responseBody = yield call([axios, "get"], "https://cogether.azurewebsites.net/account/like/", 
            { headers: headerParams });
            
            yield put(favorSuccessAction(responseBody.data));
        }
        //add & delete favor
        else if (payload.type === "post") {

            yield call(
                [axios, "post"],
                `https://cogether.azurewebsites.net/event/${payload.id}/like/`,
                {},
                { headers: headerParams });

            const responseBody = yield call([axios, "get"], "https://cogether.azurewebsites.net/account/like/", {
                headers: headerParams
            });
            
            yield put(favorSuccessAction(responseBody.data));
        }
    } catch (e) {
        yield put({ type: FAVOR_FAIL });
        if(payload.type === "post") swal("즐겨찾기는 로그인 후 이용해주세요!");
    }
}
function* watchFavor() {
    yield takeLatest(FAVOR_REQUEST, Favor);
}

//modify password
function* getPasswordData({ payload }) {
    try {
        const json = {
            current_password: payload.current_password,
            password1: payload.password1,
            password2: payload.password2,
        };
        const headerParams = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };
        
        const responseBody = yield call([axios, "put"], "https://cogether.azurewebsites.net/account/update-password/",
            json, { headers: headerParams });
        
        yield put(passwordModifySuccessAction());
        
    } catch (e) {
        yield put({ type: PASSWORD_MODIFY_FAIL });
        swal(e.response.data.message);
    }
}
function* watchPassword() {
    yield takeLatest(PASSWORD_MODIFY_REQUEST, getPasswordData);
}

//modify email alarm
function* getAlarmData({ payload }) {
    try {
        const json = {
            subscribe: payload,
        };
        const headerParams = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };
        
        const responseBody = yield call([axios, "patch"], "https://cogether.azurewebsites.net/account/update-profile/",
            json, { headers: headerParams });
        
        yield put(alarmModifySuccessAction(payload));
    } catch (e) {
        yield put({ type: ALARM_MODIFY_FAIL });
        swal(e.response.data.message);
    }
}
function* watchAlarm() {
    yield takeLatest(ALARM_MODIFY_REQUEST, getAlarmData);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin), 
        fork(watchLogout), 
        fork(watchJoin), 
        fork(watchGithubLogin), 
        fork(watchMe), 
        fork(watchFavor),
        fork(watchPassword),
        fork(watchAlarm),
    ]);
}
