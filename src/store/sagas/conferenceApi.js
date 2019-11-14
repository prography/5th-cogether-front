import { call, put, takeLatest } from 'redux-saga/effects';
import { GETCONFERENCE_REQUEST, successConference } from "../actions/conference";
import { fetchConferenceData } from "../../api";

function* getConferenceApiData() {
  try {
    // do api call
    const data = yield call(fetchConferenceData);
    yield put(successConference(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* watchConferenceApiList() {
    yield takeLatest(GETCONFERENCE_REQUEST, getConferenceApiData);
}