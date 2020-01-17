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
        const response = yield call([axios, "get"], "https://cogether.azurewebsites.net/event/?category=circle");
        var array = response.data.results;
        
        if(response.data.next) {
            var responseBody = response;

            while(1){
                var responseBody = yield call([axios, "get"], responseBody.data.next);
                array = array.concat(responseBody.data.results);
                if(responseBody.data.next===null) break;
            }
        }
        yield put(successClub(array));
    } catch (e) {
        yield put(failClub());
    }
}

function* getConferenceApiData() {
    try {
        const response = yield call([axios, "get"], "https://cogether.azurewebsites.net/event/?category=conference");
        var array = response.data.results;
        
        if(response.data.next) {
            var responseBody = response;

            while(1){
                var responseBody = yield call([axios, "get"], responseBody.data.next);
                array = array.concat(responseBody.data.results);
                if(responseBody.data.next===null) break;
            }
        }

        yield put(successConference(array));
    } catch (e) {
        yield put(failConference());
    }
}

function* getEducationApiData() {
    try {
        const response = yield call([axios, "get"], "https://cogether.azurewebsites.net/event/?category=education");
        var array = response.data.results;
        
        if(response.data.next) {
            var responseBody = response;

            while(1){
                var responseBody = yield call([axios, "get"], responseBody.data.next);
                array = array.concat(responseBody.data.results);
                if(responseBody.data.next===null) break;
            }
        }
        yield put(successEducation(array));
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
        const count = data.data.count;
        const club = data.data.results.filter(result => result.category.name === "circle");
        const conf = data.data.results.filter(result => result.category.name === "conference");
        const edu = data.data.results.filter(result => result.category.name === "education");
        
        const result = {
            count: count,
            club: club,
            conf: conf,
            edu: edu
        };
        yield put(successSearch(result));
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
