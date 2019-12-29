import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    loginSuccessAction,
    LOGOUT_REQUEST,
    LOGOUT_FAIL,
    logoutSuccessAction,
    JOIN_REQUEST,
    JOIN_FAIL,
    joinSuccessAction,
    SERVICE_REQUEST,
    SERVICE_FAIL,
    serviceSuccessAction,  
} from "../actions/User";
import { meRequestAction } from "../actions/Auth";

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
        console.log(e);
        yield put({ type: LOGIN_FAIL });
        alert("일치하는 회원 정보가 없습니다");
    }
}
function* watchLoginList() {
    yield takeLatest(LOGIN_REQUEST, getLoginData);
}

//logout
function* getLogoutData() {
    try {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        yield put(logoutSuccessAction());
        yield put(meRequestAction());
    } catch (e) {
        console.log(e);
        yield put({ type: LOGOUT_FAIL });
    }
}
function* watchLogoutList() {
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
        console.log(e);
        yield put({ type: JOIN_FAIL });
        alert("이미 존재하는 이메일 입니다.");
    }
}
function* watchJoinList() {
    yield takeLatest(JOIN_REQUEST, getJoinData);
}

export default function* userSaga() {
    yield all([
        fork(watchLoginList), 
        fork(watchLogoutList), 
        fork(watchJoinList),
    ]);
}
