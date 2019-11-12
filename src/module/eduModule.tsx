import { createAction, handleActions } from "redux-actions";
import { makeAsyncActions, makeAsyncActionCreator } from "./common";
import { templateLiteral } from "@babel/types";
import { NONAME } from "dns";

export const GETEDU = makeAsyncActions("user/GETEDU");

export const getEdu = makeAsyncActionCreator(GETEDU);

export type eduInfo = {
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

export interface eduModuleState {
    eduInfo: [eduInfo];
}

const initialState: eduModuleState = {
    eduInfo: [{}]
};

const eduReducer = handleActions(
    {
        [GETEDU.REQUEST]: (state, action) => {
            return Object.assign({}, state, {});
        },

        [GETEDU.SUCCESS]: (state, action) => {
            return Object.assign({}, state, {
                eduInfo: action.payload.eduInfo
            });
        },

        [GETEDU.FAIL]: (state, action) => {
            return Object.assign({}, state, {});
        }
    },
    initialState
);

export default eduReducer;
