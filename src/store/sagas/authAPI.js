import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { ME_REQUEST, ME_FAIL, meSuccessAction } from "../actions/getAuth";
import { logoutRequestAction } from "../actions/getUser";

function* getMeData() {
    try {
        const json = {
            token: localStorage.getItem("accessToken"),
        };
        const aaa = 'hi'; //임시
        const isExpired = yield call(
            [axios, "post"], "https://cogether.azurewebsites.net/account/api/token/verify/", json);
        
        yield put(meSuccessAction(aaa)); //isExpired로 username(이메일주소)받아오기
    } catch (e) {
        console.log(e);
        yield put({ type: ME_FAIL });
        yield put(logoutRequestAction());
    }
}
function* watchMe() {
    yield takeLatest(ME_REQUEST, getMeData);
}

export default function* meSaga() {
    yield all([
        fork(watchMe),
    ]);
}
