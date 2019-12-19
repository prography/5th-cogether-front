import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    loginSuccessAction,
    GITHUB_LOGIN_REQUEST,
    GITHUB_LOGIN_FAIL,
    githubLoginSuccessAction,
    LOGOUT_REQUEST,
    LOGOUT_FAIL,
    logoutSuccessAction,
    JOIN_REQUEST,
    JOIN_FAIL,
    joinSuccessAction,

} from "../actions/getUser";

//login
function* getLoginData({ payload }) {
    try {
        const json = {
            username: payload.username,
            password: payload.password
        };

        const responseBody = yield call(
            [axios, "post"], "https://cogether.azurewebsites.net/account/api/token/", json);

        if (responseBody.data.access) {
            localStorage.setItem("token", responseBody.data.access);
            localStorage.setItem("username", JSON.stringify(json.username));
            yield put(loginSuccessAction(responseBody));
        }
    } catch (e) {
        console.log(e);
        yield put({ type: LOGIN_FAIL });
        alert("일치하는 회원 정보가 없습니다");
    }
}
function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, getLoginData);
}


//github login
/*function* getGithubLoginData({ payload }){
    try{
        const json={};
        const responseBody = yield call(
            [axios, "post"], "https://cogether.azurewebsites.net/account/login/github/", json);

    }catch(e){
        console.log(e);
        yield put({ type: GITHUB_LOGIN_FAIL });
    }
}
function* watchGithubLogin() {
    yield takeLatest(GITHUB_LOGIN_REQUEST, getGithubLoginData);
}*/


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

        const responseBody = yield call(
            [axios, "post"], "https://cogether.azurewebsites.net/account/", json);

        if (responseBody.data) {
            localStorage.setItem("username", JSON.stringify(json.username));
            yield put(joinSuccessAction(responseBody));
        }
    } catch (e) {
        console.log(e);
        yield put({ type: JOIN_FAIL });
    }
}
function* watchJoin() {
    yield takeLatest(JOIN_REQUEST, getJoinData);
}



export default function* userSaga() {
    yield all([
        fork(watchLogin), 
        //fork(watchGithubLogin),
        fork(watchLogout), 
        fork(watchJoin),
    ]);
}
