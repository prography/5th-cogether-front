import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestDetail } from "store/actions/getInfo";
import "./ConferenceDetail.scss";

const ConferenceDetail = ({ match }) => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.conferenceReducer.detail);

    useEffect(() => {
        dispatch(requestDetail(match.params.id));
    }, []);

    return (
        <div>
            ConferenceDetail
            <div>{details.title}</div>
            <div>{details.content}</div>
            <div>{details.location}</div>
        </div>
    );
};

export default ConferenceDetail;
