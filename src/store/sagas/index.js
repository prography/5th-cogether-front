import { all, fork } from "redux-saga/effects";
import watchApiList from "./getInfoAPI";
import userSaga from "./userAPI";
import serviceSaga from "./serviceAPI";

function* rootSaga() {
    yield all([
        fork(watchApiList), 
        fork(userSaga), 
        fork(serviceSaga),
    ]);
}

export default rootSaga;
