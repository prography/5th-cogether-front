import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestDetail } from "store/actions/getInfo";
import "./EducationDetail.scss";

const EducationDetail = ({ match }) => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.educationReducer.detail);

    useEffect(() => {
        dispatch(requestDetail(match.params.id));
    }, []);

    return (
        <div>
            EducationDetail
            <div>{details.title}</div>
            <div>{details.content}</div>
            <div>{details.location}</div>
        </div>
    );
};

export default EducationDetail;
