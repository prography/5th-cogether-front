import { call, put, takeLatest } from "redux-saga/effects";
import { GETCLUB_REQUEST, successClub, failClub } from "store/actions/Info";
import { GETDETAIL_REQUEST, successDetail, failDetail } from "store/actions/Info";
import { GETEDUCATION_REQUEST, successEducation, failEducation } from "store/actions/Info";
import { GETCONFERENCE_REQUEST, successConference, failConference } from "store/actions/Info";
import { SEARCH_REQUEST, successSearch, failSearch } from "store/actions/Info";
import { fetchClubData, fetchDetail, fetchConferenceData, fetchEducationData } from "api";
import axios from "axios";

function* getClubApiData() {
    try {
        const data = yield call(fetchClubData);
        yield put(successClub(data));
    } catch (e) {
        yield put(failClub());
    }
}

function* getConferenceApiData() {
    try {
        const data = yield call(fetchConferenceData);
        yield put(successConference(data));
    } catch (e) {
        yield put(failConference());
    }
}

function* getEducationApiData() {
    try {
        const data = yield call(fetchEducationData);
        yield put(successEducation(data));
    } catch (e) {
        yield put(failEducation());
    }
}

function* getDetail(payload) {
    try {
        const data = yield call(fetchDetail, payload.payload);
        yield put(successDetail(data));
    } catch (e) {
        yield put(failDetail());
    }
}

function* searchApi(payload) {
    try {
        const data = yield call([axios, "get"], `https://cogether.azurewebsites.net/event/?title=${payload.payload}`);
        yield put(successSearch(data.data));
    } catch (e) {
        yield put(failSearch());
    }
}

export default function* watchApiList() {
    yield takeLatest(GETCLUB_REQUEST, getClubApiData);
    yield takeLatest(GETCONFERENCE_REQUEST, getConferenceApiData);
    yield takeLatest(GETEDUCATION_REQUEST, getEducationApiData);
    yield takeLatest(GETDETAIL_REQUEST, getDetail);
    yield takeLatest(SEARCH_REQUEST, searchApi);
}
