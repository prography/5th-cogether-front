import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../store/actions/User";
import search from "assets/search.svg";
import bar from "assets/bar.svg";
import user from "assets/user.svg";
import { meRequestAction } from '../../store/actions/Auth';

const HeaderContainer = () => {
    const dispatch = useDispatch();

    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const [showMenu, setShowMenu] = useState(false);

    const me = useSelector(state => state.meReducer.meInfo);

    const onLogout = useCallback(e => {
        e.preventDefault();
        dispatch(logoutRequestAction());
        setToken(localStorage.getItem("accessToken"));
    }, []);

    const showDropdownMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(()=>{
        dispatch(meRequestAction());
    }, []);

    useEffect(()=>{
        setToken(localStorage.getItem("accessToken"));
    }, [localStorage.getItem("accessToken")]);

    return (
        <div className="header">
            <div className="image">
                <Link to="/">
                    <img className="logo" src={require("../../assets/cogether_logo@3x.png")} alt="logo" />
                </Link>
            </div>
            <div className="menu">
                <Link to="/club" className="txt">
                    동아리
                </Link>
            </div>
            <div className="menu">
                <Link to="/education" className="txt">
                    교육
                </Link>
            </div>
            <div className="menu">
                <Link to="/conference" className="txt">
                    컨퍼런스
                </Link>
            </div>
            <div className="menu">
                <Link to="/userRequest" className="txt">
                    게시/수정요청
                </Link>
            </div>
            <div className="search-menu">
                <input type="text" className="search-txt" placeholder="검색 (ex. 우아한 테크코스)" />
                <Link to="/">
                    <img className="search-btn" src={search} />
                </Link>
            </div>
            <img className="bar" src={bar} />
            {token && me ? (
                <div className="account">
                    <div className="username">
                        {   me
                            /*.split('"')[1]
                            .split("@")[0]*/
                        }
                    </div>
                    <div className="usericon" onClick={showDropdownMenu}>
                        <img src={user}></img>
                    </div>
                    <span className="dropdown">
                        {showMenu ? (
                            <ul>
                                <Link to="/mypage">
                                    <ol className="list">마이페이지</ol>
                                </Link>

                                <Link to="/" onClick={onLogout}>
                                    <ol className="list">로그아웃</ol>
                                </Link>
                            </ul>
                        ) : null}
                    </span>
                </div>
            ) : (
                <div className="account">
                    <Link to="/login" className="login-btn">
                        로그인
                    </Link>
                    <Link to="/join" className="sign-btn">
                        회원가입
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HeaderContainer;
