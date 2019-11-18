import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestDetail } from "store/actions/getInfo";
import "./ClubDetail.scss";

const ClubDetail = ({ match }) => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.clubReducer.detail);

    useEffect(() => {
        dispatch(requestDetail(match.params.id));
    }, []);

    return (
        <div>
            ClubDetail
            <div>{details.title}</div>
            <div>{details.content}</div>
            <div>{details.location}</div>
        </div>
    );
};

export default ClubDetail;
