import { put, takeEvery } from "redux-saga/effects";
import { envProps } from "./common";
import { GETCONF } from "module/confModule";

////////////////////////////////////////////////////////////////////////
////////////////////////          define        ////////////////////////
////////////////////////////////////////////////////////////////////////
function* ConfSaga() {
    yield takeEvery(GETCONF.REQUEST, getConf);
}

////////////////////////////////////////////////////////////////////////
////////////////////////        process         ////////////////////////
////////////////////////////////////////////////////////////////////////

function* getConf() {
    try {
        let info = yield getConfFetch();

        yield put({
            type: GETCONF.SUCCESS,
            payload: {
                confInfo: info
            }
        });
    } catch (e) {
        yield put({
            type: GETCONF.FAIL
        });
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////      API function      ////////////////////////
////////////////////////////////////////////////////////////////////////

const getConfFetch = () => {
    console.log();
    return new Promise((resolve, reject) => {
        try {
            fetch(envProps.HOST_URL + "?category=conference", {
                method: "GET",
                //    mode: "no-cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    if (res.status === 400) {
                    } else if (res.status === 200) {
                        console.log("res", res);
                        return res.json();
                    }
                })
                .then(json => {
                    if (json) {
                        console.log("json", json);
                        //if (json.token) {
                        resolve(json);
                        // } else if (json.non_field_errors) {
                        //     reject("FAIL TO GET VENDOR LIST");
                        // }
                    }
                });
        } catch (e) {
            console.log("error", e);
            reject("error");
        }
    });
};

export default ConfSaga;
