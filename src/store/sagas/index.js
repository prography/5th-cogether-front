import { all, fork } from 'redux-saga/effects';
import watchClubApiList from './clubApi';
import watchEducationApiList from './educationApi';
import watchConferenceApiList from './conferenceApi';

function* rootSaga() {
  yield all([
      fork(watchClubApiList),
      fork(watchConferenceApiList),
      fork(watchEducationApiList)
    ]);
}

export default rootSaga;