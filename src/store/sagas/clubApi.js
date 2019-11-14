import { call, put, takeLatest } from 'redux-saga/effects';
import { GETCLUB_REQUEST, successClub } from "../actions/club";
import { fetchClubData } from "../../api";

function* getClubApiData() {
  try {
    // do api call
    const data = yield call(fetchClubData);
    yield put(successClub(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* watchClubApiList() {
    yield takeLatest(GETCLUB_REQUEST, getClubApiData);
}