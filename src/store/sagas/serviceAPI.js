import { call, put, takeLatest } from "redux-saga/effects";
import { INTRO_REQUEST, introSuccessAction, meFailAction } from "store/actions/Service";
import { FREQ_REQUEST, freqSuccessAction, freqFailAction } from "store/actions/Service";
import { HELP_REQUEST, helpSuccessAction, helpFailAction } from "store/actions/Service";
import { fetchIntroData, fetchFreqData } from "api";
import axios from "axios";

function* getIntroApiData() {
    try {
        // do api call
        const data = yield call(fetchIntroData);
        yield put(introSuccessAction(data));
    } catch (e) {
        yield put(meFailAction());
        console.log(e);
    }
}

function* getFreqeApiData() {
    try {
        // do api call
        const data = yield call(fetchFreqData);
        yield put(freqSuccessAction(data));
    } catch (e) {
        yield put(freqFailAction());
        //console.log("freqapi: ", e);
    }
}

function* getHelpApiData(info) {
    try {
        // do api call
        // const json = {
        //     username: payload.username,
        //     password1: payload.p1,
        //     password2: payload.p2,
        // };
        console.log("info", info.payload);
        const json = {
            user: info.payload.user
        };
        console.log(json);
        let data = null;

        const headerParams = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        };

        if (info.payload.title) {
            data = yield call([axios, "post"], "https://cogether.azurewebsites.net/help-center/my-questions/", json, {
                headers: headerParams
            });
        } else {
            data = yield call([axios, "get"], "hhttps://cogether.azurewebsites.net/help-center/my-questions/", {
                headers: headerParams
            });
        }
        yield put(helpSuccessAction(data.data));
    } catch (e) {
        yield put(helpFailAction());
        console.log(e);
    }
}

export default function* serviceSaga() {
    yield takeLatest(INTRO_REQUEST, getIntroApiData);
    yield takeLatest(FREQ_REQUEST, getFreqeApiData);
    yield takeLatest(HELP_REQUEST, getHelpApiData);
}
