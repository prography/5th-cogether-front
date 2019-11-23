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
            <div className="detailBox">
                <div className="box">{details.title}</div>
                <div className="box">{details.content}</div>
                <div className="box">{details.location}</div>
            </div>
        </div>
    );
};

export default ConferenceDetail;
