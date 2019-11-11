import React, { Fragment } from "react";
import Header from "component/Header";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { clubInfo } from "module/clubModule";

const MainPT: React.SFC<IProps> = props => {
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    console.log("info: ", props.clubInfo);
    return (
        <div className="wrap">
            {/*<Header></Header>*/}
            <div className="page">
                <div className="intro">intro</div>
                <div className="club">
                    <div className="title">동아리</div>
                    <div className="itemlist">
                        <Slider {...settings}>
                            {props.clubInfo.map(club => {
                                return (
                                    <div className="item">
                                        <div className="title">{club.title}</div>
                                        <div className="tag">
                                            {club.tag &&
                                                club.tag.map(tag => {
                                                    return <div>{tag.name}</div>;
                                                })}
                                        </div>
                                        <div className="image">{club.image}</div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="education">
                    <div className="title">교육</div>
                    <div className="itemlist">
                        <Slider {...settings}>
                            <div className="item">item1</div>
                            <div className="item">item2</div>
                            <div className="item">item3</div>
                            <div className="item">item4</div>
                            <div className="item">item5</div>
                            <div className="item">item6</div>
                        </Slider>
                    </div>
                </div>
                <div className="conference">
                    <div className="title">컨퍼런스</div>
                    <div className="itemlist">
                        <Slider {...settings}>
                            <div className="item">item1</div>
                            <div className="item">item2</div>
                            <div className="item">item3</div>
                            <div className="item">item4</div>
                            <div className="item">item5</div>
                            <div className="item">item6</div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* <div className="footer">footer</div> */}
        </div>
    );
};

type IProps = {
    clubInfo: [clubInfo];
};

export default MainPT;
