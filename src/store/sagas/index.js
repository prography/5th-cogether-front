import { all, fork } from "redux-saga/effects";
import watchApiList from "./getInfoAPI";

function* rootSaga() {
    yield all([fork(watchApiList)]);
}

export default rootSaga;
