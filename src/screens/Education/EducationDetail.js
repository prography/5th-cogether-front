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
            <div className="detailBox">
                <div className="box">{details.title}</div>
                <div className="box">{details.content}</div>
                <div className="box">{details.location}</div>
            </div>
        </div>
    );
};

export default EducationDetail;
