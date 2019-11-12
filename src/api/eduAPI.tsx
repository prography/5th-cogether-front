import { put, takeEvery } from "redux-saga/effects";
import { envProps } from "./common";
import { GETEDU } from "module/eduModule";

////////////////////////////////////////////////////////////////////////
////////////////////////          define        ////////////////////////
////////////////////////////////////////////////////////////////////////
function* EduSaga() {
    yield takeEvery(GETEDU.REQUEST, getEdu);
}

////////////////////////////////////////////////////////////////////////
////////////////////////        process         ////////////////////////
////////////////////////////////////////////////////////////////////////

function* getEdu() {
    try {
        let info = yield getEduFetch();

        yield put({
            type: GETEDU.SUCCESS,
            payload: {
                eduInfo: info
            }
        });
    } catch (e) {
        yield put({
            type: GETEDU.FAIL
        });
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////      API function      ////////////////////////
////////////////////////////////////////////////////////////////////////

const getEduFetch = () => {
    console.log();
    return new Promise((resolve, reject) => {
        try {
            fetch(envProps.HOST_URL + "?category=education", {
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

export default EduSaga;
