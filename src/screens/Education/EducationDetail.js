import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestDetail } from "store/actions/getInfo";
import "./EducationDetail.scss";
import { Card } from 'antd';

const EducationDetail = ({ match }) => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.educationReducer.detail);

    useEffect(() => {
        dispatch(requestDetail(match.params.id));
    }, []);

    return (
        <div> 
            <Card>
                <div className="detailBox">
                    <div className="box"><img className="image" src={details.photo}></img></div>
                    <div className="box">{details.title}</div>
                    <div className="box">{details.content}</div>
                    <div className="box">{details.location}</div>
                </div>
            </Card>
        </div>
    );
};

export default EducationDetail;
