import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestDetail } from "store/actions/Info";
import "./ClubDetail.scss";
import { Card } from "antd";

const ClubDetail = ({ match }) => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.clubReducer.detail);

    useEffect(() => {
        dispatch(requestDetail(match.params.id));
    }, []);

    return (
        <div>
            <Card>
                <div className="detailBox">
                    {details.photo ? (
                        <div className="box">
                            <img className="image" src={details.photo}></img>
                        </div>
                    ) : null}
                    {details.title ? <div className="box">{details.title}</div> : null}
                    {details.content ? (
                        <div className="box">
                            {
                                <div className="box">
                                    {details.content
                                        .replace(/(<br>|<br\/>|<br \/>|<p>|<\/p>)/g, "\n")
                                        .split("\n")
                                        .map(line => {
                                            return (
                                                <span>
                                                    {line}
                                                    <br />
                                                </span>
                                            );
                                        })}
                                </div>
                            }
                        </div>
                    ) : null}
                    {details.location ? <div className="box">{details.location}</div> : null}
                </div>
            </Card>
        </div>
    );
};

export default ClubDetail;
