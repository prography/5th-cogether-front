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
    favorSuccess
} from "../actions/User";
import { meRequestAction } from "../actions/User";
import swal from "sweetalert";

//login
function* getLoginData({ payload }) {
    try {
        const json = {
            username: payload.username,
            password: payload.password
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
            password2: payload.p2
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
            token: localStorage.getItem("accessToken")
        };

        const isExpired = yield call([axios, "post"], "https://cogether.azurewebsites.net/account/api/token/verify/", json);

        const jwt = require("jsonwebtoken");
        const decoded = jwt.decode(localStorage.getItem("accessToken"));

        yield put(meSuccessAction(JSON.stringify(decoded.username)));
    } catch (e) {
        yield put({ type: ME_FAIL });
        yield put(logoutRequestAction());
    }
}
function* watchMe() {
    yield takeLatest(ME_REQUEST, getMeData);
}

function* Favor(data) {
    try {
        //get favor
        if (data.type === "get") {
        }
        //add favor
        else {
        }
        // const json = {
        //     token: localStorage.getItem("accessToken")
        // };
        // const jwt = require("jsonwebtoken");
        // const decoded = jwt.decode(localStorage.getItem("accessToken"));
        // yield put(meSuccessAction(JSON.stringify(decoded.username)));
    } catch (e) {
        yield put({ type: FAVOR_FAIL });
    }
}

export default function* userSaga() {
    yield all([fork(watchLogin), fork(watchLogout), fork(watchJoin), fork(watchGithubLogin), fork(watchMe), fork(Favor)]);
}
