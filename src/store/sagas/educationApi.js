import { call, put, takeLatest } from 'redux-saga/effects';
import { GETEDUCATION_REQUEST, successEducation } from "../actions/education";
import { fetchEducationData } from "../../api";

function* getEducationApiData() {
  try {
    // do api call
    const data = yield call(fetchEducationData);
    yield put(successEducation(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* watchEducationApiList() {
    yield takeLatest(GETEDUCATION_REQUEST, getEducationApiData);
}