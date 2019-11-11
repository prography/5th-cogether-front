import React from "react";
import { Link } from 'react-router-dom';
import "./Header.scss";

const HeaderContainer: React.SFC<IProps> = props => {
    return (
        <div className="header">
            <div className="image" >
                <Link to="/"><div className="logo"></div></Link>
            </div>
            <div className="menu">
                <Link to="/club" className="txt">동아리</Link>
            </div>
            <div className="menu">
                <Link to="/education" className="txt">교육</Link>
            </div>
            <div className="menu">
                <Link to="/conference" className="txt">컨퍼런스</Link>
            </div>
            <div className="menu">
                <Link to="/userRequest" className="txt">게시/수정요청</Link>
            </div>
            <div className="search-menu">
                <input type="text" className="search-txt"></input>
                <Link to="/"><div className="search-btn"></div></Link>
            </div>
            <div className="menu-account">
                <Link to="/login" className="txt">로그인</Link>
            </div>
            <div className="menu-account">
                <Link to="/join" className="txt">회원가입</Link>
            </div>
        </div>
    );
};

type IProps = {};

export default HeaderContainer;
