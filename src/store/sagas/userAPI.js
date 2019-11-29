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
    joinSuccessAction
} from "../actions/getUser";

//login
function* getLoginData({ payload }) {
    try {
        const json = {
            username: payload.username,
            password: payload.password
        };

        const responseBody = yield call([axios, "post"], "https://cogether.azurewebsites.net/account/api-token-auth/", json);

        if (responseBody.data.token) {
            //console.log(responseBody.data);
            //console.log("json ", json);
            localStorage.setItem("token", responseBody.data.token);
            localStorage.setItem("username", JSON.stringify(json.username));
            yield put(loginSuccessAction(responseBody));
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
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        yield put(logoutSuccessAction());
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
            password2: payload.p2
        };

        const responseBody = yield call([axios, "post"], "https://cogether.azurewebsites.net/account/", json);

        if (responseBody.data) {
            localStorage.setItem("username", JSON.stringify(json.username));
            yield put(joinSuccessAction(responseBody));
        }
    } catch (e) {
        console.log(e);
        yield put({ type: JOIN_FAIL });
    }
}
function* watchJoinList() {
    yield takeLatest(JOIN_REQUEST, getJoinData);
}

export default function* userSaga() {
    yield all([fork(watchLoginList), fork(watchLogoutList), fork(watchJoinList)]);
}
