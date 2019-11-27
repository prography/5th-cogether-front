import { all, fork } from "redux-saga/effects";
import watchApiList from "./getInfoAPI";
import userSaga from "./userAPI";

function* rootSaga() {
    yield all([
        fork(watchApiList),
        fork(userSaga),
    ]);
}

export default rootSaga;
