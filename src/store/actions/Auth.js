export const ME_REQUEST = "ME_REQUEST";
export const ME_SUCCESS = "ME_SUCCESS";
export const ME_FAIL = "ME_FAIL";

//me
export const meRequestAction =()=> ({
    type:ME_REQUEST,
});
export const meSuccessAction = data => ({
    type:ME_SUCCESS,
    payload:data,
});
export const meFailAction =()=> ({
    type:ME_FAIL,
});