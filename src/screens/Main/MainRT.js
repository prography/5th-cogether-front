import React, { useEffect } from "react";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestClub, requestConference, requestEducation } from "store/actions/Info";
import "./MainRT.scss";

const MainRT = () => {

    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubReducer.clubInfo, []);
    const conferences = useSelector(state => state.conferenceReducer.conferenceInfo, []);
    const educations = useSelector(state => state.educationReducer.educationInfo, []);
    
    useEffect(() => {
        dispatch(requestClub());
        dispatch(requestConference());
        dispatch(requestEducation());
    }, []);
    
    return (
        <>
        <div className="media-box">
            <div className="title">동아리</div>
                <Link to="/club" className="txt">
                    <button className="all">전체보기</button>
                </Link>
            </div>
            <Carousel showArrows={true} autoplay={true} className="carousel">
                {conferences.results && conferences.results.map(conf => {
                    return(
                        <div className="element">
                            <img className="image" src={conf.photo.photo ? conf.photo.photo : require("assets/placeholder.png")} />
                            <p className="host">{conf.host}</p>
                            <p className="title">{conf.title}</p>
                        </div>
                    );     
                })}
            </Carousel>
            
            <div className="media-box">
                <div className="title">교육</div>
                <Link to="/education" className="txt">
                    <button className="all">전체보기</button>
                </Link>
            </div>
            <Carousel showArrows={true} autoplay={true} className="carousel">
                {conferences.results && conferences.results.map(conf => {
                    return(
                        <div className="element">
                            <img className="image" src={conf.photo.photo ? conf.photo.photo : require("assets/placeholder.png")} />
                            <p className="host">{conf.host}</p>
                            <p className="title">{conf.title}</p>
                        </div>
                    );     
                })}
            </Carousel> 

            <div className="media-box">
                <div className="title">컨퍼런스</div>
                <Link to="/conference" className="txt">
                    <button className="all">전체보기</button>
                </Link>
            </div>
            <Carousel showArrows={true} autoplay={true} className="carousel">
                {conferences.results && conferences.results.map(conf => {
                    return(
                        <div className="element">
                            <img className="image" src={conf.photo.photo ? conf.photo.photo : require("assets/placeholder.png")} />
                            <p className="host">{conf.host}</p>
                            <p className="title">{conf.title}</p>
                        </div>
                    );     
                })}
            </Carousel> 
        </> 
    );
};

export default MainRT;
