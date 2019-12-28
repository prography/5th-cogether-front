import React, { useEffect, useState } from "react";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scroll_down from "assets/scroll-down.svg";
import { Link } from "react-router-dom";
import Footer from "component/Footer";
import ItemsCarousel from "react-items-carousel";
import { useSelector, useDispatch } from "react-redux";
import { requestClub, requestConference, requestEducation } from "store/actions/getInfo";
import PrevArrow from "component/Arrow/PrevArrow";
import NextArrow from "component/Arrow/NextArrow";

const MainPT = () => {
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubReducer.clubInfo, []);
    const conferences = useSelector(state => state.conferenceReducer.conferenceInfo, []);
    const educations = useSelector(state => state.educationReducer.educationInfo, []);
    const [clubIndex, setClubIndex] = useState(0);
    const [eduIndex, setEduIndex] = useState(0);
    const [confIndex, setConfIndex] = useState(0);


    //const createChildren = useCallback(() => {}, [clubs]);

    useEffect(() => {
        dispatch(requestClub());
        dispatch(requestConference());
        dispatch(requestEducation());
    }, []);

    const changeActiveClubItem = index => {
        setClubIndex(index);
    };
    const changeActiveConfItem = index => {
        setConfIndex(index);
    };
    const changeActiveEduItem = index => {
        setEduIndex(index);
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
                        <Link to="/club" className="txt">
                            <button className="all">전체보기</button>
                        </Link>
                    </div>
                    <div className="itemlist">
                        <ItemsCarousel
                            // Carousel configurations
                            numberOfCards={3}
                            gutter={16}
                            showSlither={false}
                            firstAndLastGutter={false}
                            freeScrolling={false}
                            // Active item configurations
                            requestToChangeActive={changeActiveClubItem}
                            activeItemIndex={clubIndex}
                            activePosition={"center"}
                            chevronWidth={72}
                            rightChevron={<NextArrow></NextArrow>}
                            leftChevron={<PrevArrow></PrevArrow>}
                            outsideChevron={true}
                        >
                            {clubs.results &&
                                clubs.results.map(club => {
                                    return (
                                        <Link to={`/club/${club.id}`}>
                                            <div
                                                className="item"
                                                style={{
                                                    height: 365,
                                                    borderRadius: 3,
                                                    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.21)",
                                                    backgroundColor: "#ffffff",
                                                    marginBottom: 2
                                                }}
                                            >
                                                <img src={club.photo ? club.photo : require("assets/placeholder.png")} alt="logo" />
                                                <div className="host">{club.host}</div>
                                                <div className="title">{club.title}</div>
                                            </div>
                                        </Link>
                                    );
                                })}
                        </ItemsCarousel>
                    </div>
                </div>
                <div className="education">
                    <div className="title-box">
                        <div className="title">교육</div>
                        <Link to="/club" className="txt">
                            <button className="all">전체보기</button>
                        </Link>
                    </div>
                    <div className="itemlist">
                        <ItemsCarousel
                            // Carousel configurations
                            numberOfCards={3}
                            gutter={16}
                            showSlither={false}
                            firstAndLastGutter={false}
                            freeScrolling={false}
                            // Active item configurations
                            requestToChangeActive={changeActiveEduItem}
                            activeItemIndex={eduIndex}
                            activePosition={"center"}
                            chevronWidth={72}
                            rightChevron={<NextArrow></NextArrow>}
                            leftChevron={<PrevArrow></PrevArrow>}
                            outsideChevron={true}
                        >
                            {educations.results &&
                                educations.results.map(edu => {
                                    return (
                                        <Link to={`/club/${edu.id}`}>
                                            <div
                                                className="item"
                                                style={{
                                                    height: 365,
                                                    borderRadius: 3,
                                                    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.21)",
                                                    backgroundColor: "#ffffff",
                                                    marginBottom: 2
                                                }}
                                            >
                                                <img src={edu.photo ? edu.photo : require("assets/placeholder.png")} alt="logo" />
                                                <div className="host">{edu.host}</div>
                                                <div className="title">{edu.title}</div>
                                            </div>
                                        </Link>
                                    );
                                })}
                        </ItemsCarousel>
                    </div>
                </div>
                <div className="conference">
                    <div className="title-box">
                        <div className="title">컨퍼런스</div>
                        <Link to="/club" className="txt">
                            <button className="all">전체보기</button>
                        </Link>
                    </div>
                    <div className="itemlist">
                        <ItemsCarousel
                            // Carousel configurations
                            numberOfCards={3}
                            gutter={16}
                            showSlither={false}
                            firstAndLastGutter={false}
                            freeScrolling={false}
                            // Active item configurations
                            requestToChangeActive={changeActiveConfItem}
                            activeItemIndex={confIndex}
                            activePosition={"center"}
                            chevronWidth={72}
                            rightChevron={<NextArrow></NextArrow>}
                            leftChevron={<PrevArrow></PrevArrow>}
                            outsideChevron={true}
                        >
                            {conferences.results &&
                                conferences.results.map(conf => {
                                    return (
                                        <Link to={`/club/${conf.id}`}>
                                            <div
                                                className="item"
                                                style={{
                                                    height: 365,
                                                    borderRadius: 3,
                                                    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.21)",
                                                    backgroundColor: "#ffffff",
                                                    marginBottom: 2
                                                }}
                                            >
                                                <img src={conf.photo ? conf.photo : require("assets/placeholder.png")} alt="logo" />
                                                <div className="host">{conf.host}</div>
                                                <div className="title">{conf.title}</div>
                                            </div>
                                        </Link>
                                    );
                                })}
                        </ItemsCarousel>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainPT;
