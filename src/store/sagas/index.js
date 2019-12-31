import { all, fork } from "redux-saga/effects";
import watchApiList from "./getInfoAPI";
import userSaga from "./userAPI";
import meSaga from "./authAPI";

function* rootSaga() {
    yield all([
        fork(watchApiList),
        fork(userSaga),
        fork(meSaga),
    ]);
}

export default rootSaga;
