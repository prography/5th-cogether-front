import { call, put, takeLatest } from "redux-saga/effects";
import { INTRO_REQUEST, introSuccessAction, meFailAction } from "store/actions/Service";
import { FREQ_REQUEST, freqSuccessAction, freqFailAction } from "store/actions/Service";
import { HELP_REQUEST, helpSuccessAction, helpFailAction } from "store/actions/Service";
import { fetchIntroData, fetchFreqData, fetchHelpData } from "api";

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
        console.log(e);
    }
}

function* getHelpApiData() {
    try {
        // do api call
        const data = yield call(fetchHelpData);
        yield put(helpSuccessAction(data));
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
