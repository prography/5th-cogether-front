import { createAction, handleActions } from "redux-actions";
import { makeAsyncActions, makeAsyncActionCreator } from "./common";
import { templateLiteral } from "@babel/types";
import { NONAME } from "dns";

export const GETCLUB = makeAsyncActions("user/GETCLUB");

export const getClub = makeAsyncActionCreator(GETCLUB);

export type clubInfo = {
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

export interface clubModuleState {
    clubInfo: [clubInfo];
}

const initialState: clubModuleState = {
    clubInfo: [{}]
};

const clubReducer = handleActions(
    {
        [GETCLUB.REQUEST]: (state, action) => {
            return Object.assign({}, state, {});
        },

        [GETCLUB.SUCCESS]: (state, action) => {
            return Object.assign({}, state, {
                clubInfo: action.payload.clubInfo
            });
        },

        [GETCLUB.FAIL]: (state, action) => {
            return Object.assign({}, state, {});
        }
    },
    initialState
);

export default clubReducer;
