import { put, takeEvery } from "redux-saga/effects";
import { envProps } from "./common";
import { GETCLUB } from "module/clubModule";

////////////////////////////////////////////////////////////////////////
////////////////////////          define        ////////////////////////
////////////////////////////////////////////////////////////////////////
function* ClubSaga() {
    yield takeEvery(GETCLUB.REQUEST, getClub);
}

////////////////////////////////////////////////////////////////////////
////////////////////////        process         ////////////////////////
////////////////////////////////////////////////////////////////////////

function* getClub() {
    try {
        let info = yield getClubFetch();

        yield put({
            type: GETCLUB.SUCCESS,
            payload: {
                clubInfo: info
            }
        });
    } catch (e) {
        yield put({
            type: GETCLUB.FAIL
        });
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////      API function      ////////////////////////
////////////////////////////////////////////////////////////////////////

const getClubFetch = () => {
    console.log();
    return new Promise((resolve, reject) => {
        try {
            fetch(envProps.HOST_URL + "?category=circle", {
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

export default ClubSaga;
