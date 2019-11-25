import React, { useEffect } from "react";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import scroll_down from "assets/scroll-down.svg";

import { useSelector, useDispatch } from "react-redux";
import { requestClub, requestConference, requestEducation } from "store/actions/getInfo";

const MainPT = () => {
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubReducer.clubInfo, []);
    const conferences = useSelector(state => state.conferenceReducer.conferenceInfo, []);
    const educations = useSelector(state => state.educationReducer.educationInfo, []);

    useEffect(() => {
        dispatch(requestClub());
        dispatch(requestConference());
        dispatch(requestEducation());
    }, []);

    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="wrap">
            <div className="page">
                <div className="intro">
                    <div className="service-upper-blank"></div>
                    <div className="service-slogan">국내 개발 행사 한번에 볼 수 없을까?</div>
                    <div className="service-explanation">
                        Co.gether에서는 개발자들을 위한 동아리 교육 컨퍼런스 정보를 제공합니다.
                        <br />
                        쉽고 빠르게 원하는 개발 모임을 찾고, 컨퍼런스에 참가해 보아요!
                    </div>
                    <div className="chevron-down">
                        <img src={scroll_down} alt="scroll down" />
                    </div>
                </div>
                <div className="club">
                    <div className="title-box">
                        <div className="title">동아리</div>
                        <button className="all">전체보기</button>
                    </div>
                    <div className="itemlist">
                        <Slider {...settings}>
                            {clubs.results &&
                                clubs.results.map(club => {
                                    return (
                                        <div className="item">
                                            <div className="title">{club.title}</div>
                                            <div className="image">{club.image}</div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
                <div className="education">
                    <div className="title-box">
                        <div className="title">교육</div>
                        <button className="all">전체보기</button>
                    </div>
                    <div className="itemlist">
                        <Slider {...settings}>
                            {educations.results &&
                                educations.results.map(edu => {
                                    return (
                                        <div className="item">
                                            <div className="title">{edu.title}</div>
                                            <div className="image">{edu.image}</div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
                <div className="conference">
                    <div className="title-box">
                        <div className="title">컨퍼런스</div>
                        <button className="all">전체보기</button>
                    </div>
                    <div className="itemlist">
                        <Slider {...settings}>
                            {conferences.results &&
                                conferences.results.map(conf => {
                                    return (
                                        <div className="item">
                                            <div className="title">{conf.title}</div>
                                            <div className="image">{conf.image}</div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
            {/* <div className="footer">footer</div> */}
        </div>
    );
};

export default MainPT;
