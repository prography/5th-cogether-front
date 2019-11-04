import React from "react";
import "./Header.scss";

const HeaderContainer: React.SFC<IProps> = props => {
    return (
        <div className="header">
            <div className="image" >
                <a href="#"><div className="logo"></div></a>
            </div>
            <div className="menu">
                <span className="txt">동아리</span>
            </div>
            <div className="menu">
                <span className="txt">교육</span>
            </div>
            <div className="menu">
                <span className="txt">컨퍼런스</span>
            </div>
            <div className="menu">
                <span className="txt">게시/수정요청</span>
            </div>
            <div className="search-menu">
                <input type="text" className="search-txt"></input>
                <a href="#" className="search-btn">
                </a>
            </div>
            <div className="menu-account">
                <span className="txt">로그인</span>
            </div>
            <div className="menu-account">
                <span className="txt">회원가입</span>
            </div>
        </div>
    );
};

type IProps = {};

export default HeaderContainer;