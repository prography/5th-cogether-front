import { call, put, takeLatest } from "redux-saga/effects";
import { HELP_REQUEST, helpSuccessAction, helpFailAction } from "store/actions/Service";
import axios from "axios";

function* getHelpApiData(info) {
    try {
        // do api call
        // const json = {
        //     username: payload.username,
        //     password1: payload.p1,
        //     password2: payload.p2,
        // };
        console.log("info", info.payload);
        const json = {
            user: info.payload.user
        };
        console.log(json);
        let data = null;

        const headerParams = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        };

        if (info.payload.title) {
            data = yield call([axios, "post"], "https://cogether.azurewebsites.net/help-center/my-questions/", json, {
                headers: headerParams
            });
        } else {
            data = yield call([axios, "get"], "hhttps://cogether.azurewebsites.net/help-center/my-questions/", {
                headers: headerParams
            });
        }
        yield put(helpSuccessAction(data.data));
    } catch (e) {
        yield put(helpFailAction());
        console.log(e);
    }
}

export default function* serviceSaga() {
    yield takeLatest(HELP_REQUEST, getHelpApiData);
}
