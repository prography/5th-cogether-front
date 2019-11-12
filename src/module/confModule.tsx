import { createAction, handleActions } from "redux-actions";
import { makeAsyncActions, makeAsyncActionCreator } from "./common";
import { templateLiteral } from "@babel/types";
import { NONAME } from "dns";

export const GETCONF = makeAsyncActions("user/GETCONF");

export const getConf = makeAsyncActionCreator(GETCONF);

export type confInfo = {
    title?: string;
    host?: string;
    content?: string;
    image?: string;
    created_at?: string;
    updated_at?: string;
    start_at?: string;
    end_at?: string;
    external_link?: string;
    location?: string;
    tag?: [{ name: string }];
};

export interface confModuleState {
    confInfo: [confInfo];
}

const initialState: confModuleState = {
    confInfo: [{}]
};

const confReducer = handleActions(
    {
        [GETCONF.REQUEST]: (state, action) => {
            return Object.assign({}, state, {});
        },

        [GETCONF.SUCCESS]: (state, action) => {
            return Object.assign({}, state, {
                confInfo: action.payload.confInfo
            });
        },

        [GETCONF.FAIL]: (state, action) => {
            return Object.assign({}, state, {});
        }
    },
    initialState
);

export default confReducer;
