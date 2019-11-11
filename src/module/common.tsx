import { createAction } from "redux-actions";

export function makeAsyncActions(actionName: string) {
    return {
        INDEX: actionName + "_INDEX",
        REQUEST: actionName + "_REQUEST",
        SUCCESS: actionName + "_SUCCESS",
        FAIL: actionName + "_FAIL"
    };
}
export function makeAsyncActionCreator(actions: { INDEX: string; REQUEST: string; SUCCESS: string; FAIL: string }) {
    let actionCreator = {
        index: createAction(actions.INDEX),
        request: createAction(actions.REQUEST),
        success: createAction(actions.SUCCESS),
        fail: createAction(actions.FAIL)
    };

    return actionCreator;
}
