export const INTRO_REQUEST = "INTRO_REQUEST";
export const INTRO_SUCCESS = "INTRO_SUCCESS";
export const INTRO_FAIL = "INTRO_FAIL";

export const FREQ_REQUEST = "FREQ_REQUEST";
export const FREQ_SUCCESS = "FREQ_SUCCESS";
export const FREQ_FAIL = "FREQ_FAIL";

export const HELP_REQUEST = "HELP_REQUEST";
export const HELP_SUCCESS = "HELP_SUCCESS";
export const HELP_FAIL = "HELP_FAIL";

export const introRequestAction = () => ({
    type: INTRO_REQUEST,
});
export const introSuccessAction = data => ({
    type: INTRO_SUCCESS,
    payload: data,
});
export const meFailAction = () => ({
    type: INTRO_FAIL,
});

export const freqRequestAction = () => ({
    type: FREQ_REQUEST,
});
export const freqSuccessAction = data => ({
    type: FREQ_SUCCESS,
    payload: data,
});
export const freqFailAction = () => ({
    type: FREQ_FAIL,
});

export const helpRequestAction = data => ({
    type: HELP_REQUEST,
    payload: data,
});
export const helpSuccessAction = data => ({
    type: HELP_SUCCESS,
    payload: data,
});
export const helpFailAction = () => ({
    type: FREQ_FAIL,
});
