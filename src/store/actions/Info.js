export const GETCLUB_REQUEST = "GETCLUB_REQUEST";
export const GETCLUB_SUCCESS = "GETCLUB_SUCCESS";
export const GETCLUB_FAIL = "GETCLUB_FAIL";

export const GETCONFERENCE_REQUEST = "GETCONFERENCE_REQUEST";
export const GETCONFERENCE_SUCCESS = "GETCONFERENCE_SUCCESS";
export const GETCONFERENCE_FAIL = "GETCONFERENCE_FAIL";

export const GETEDUCATION_REQUEST = "GETEDUCATION_REQUEST";
export const GETEDUCATION_SUCCESS = "GETEDUCATION_SUCCESS";
export const GETEDUCATION_FAIL = "GETEDUCATION_FAIL";

export const GETDETAIL_REQUEST = "GETDETAIL_REQUEST";
export const GETDETAIL_SUCCESS = "GETDETAIL_SUCCESS";
export const GETDETAIL_FAIL = "GETDETAIL_FAIL";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

//club info
export const requestClub = () => ({
    type: "GETCLUB_REQUEST",
});
export const successClub = data => ({
    type: "GETCLUB_SUCCESS",
    payload: data,
});
export const failClub = () => ({
    type: "GETCLUB_FAIL",
});

//conference info
export const requestConference = () => ({
    type: "GETCONFERENCE_REQUEST",
});
export const successConference = data => ({
    type: "GETCONFERENCE_SUCCESS",
    payload: data,
});
export const failConference = () => ({
    type: "GETCONFERENCE_FAIL",
});

//education info
export const requestEducation = () => ({
    type: "GETEDUCATION_REQUEST",
});
export const successEducation = data => ({
    type: "GETEDUCATION_SUCCESS",
    payload: data,
});
export const failEducation = () => ({
    type: "GETEDUCATION_FAIL",
});

//detail
export const requestDetail = id => ({
    type: "GETDETAIL_REQUEST",
    payload: id,
});
export const successDetail = data => ({
    type: "GETDETAIL_SUCCESS",
    payload: data,
});
export const failDetail = () => ({
    type: "GETDETAIL_FAIL",
});

//search
export const requestSearch = text => ({
    type: "SEARCH_REQUEST",
    payload: text,
});
export const successSearch = data => ({
    type: "SEARCH_SUCCESS",
    payload: data,
});
export const failSearch = () => ({
    type: "SEARCH_FAIL",
});
