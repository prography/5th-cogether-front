import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { ME_REQUEST, ME_FAIL, meSuccessAction } from "../actions/Auth";
import { logoutRequestAction } from "../actions/User";

function* getMeData() {
    try {
        const json = {
            token: localStorage.getItem("accessToken"),
        };
        
        const isExpired = yield call(
            [axios, "post"], "https://cogether.azurewebsites.net/account/api/token/verify/", json);

        const jwt = require("jsonwebtoken");
        const decoded = jwt.decode(localStorage.getItem("accessToken"));
        
        yield put(meSuccessAction(JSON.stringify(decoded.username))); 
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
