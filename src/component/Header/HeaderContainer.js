import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../store/actions/getUser";
import { Redirect } from'react-router-dom';

const HeaderContainer= () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const me = useSelector(state=> state.userReducer.userInfo);

    const onLogout = useCallback(( e )=> {
        e.preventDefault();
        dispatch(logoutRequestAction());
        setUsername(localStorage.getItem('username'));
    },[]);

    return (
        <div className="header">
            <div className="image" >
                <Link to="/">
                  <img className="logo" src={require("../../assets/cogether_logo@3x.png")} alt="logo"/>
                </Link>
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
                <input type="text" className="search-txt" placeholder="검색 (ex. 우아한 테크코스)" />
                <Link to="/"><img className="search-btn" src={require("../../assets/SearchButton.png")}/></Link>
            </div>
            {username||me ? 
                <div className="account">
                    {/*<div className="menu-account">*/}
                        <Link to="/mypage" className="txt">마이페이지</Link>
                    {/*</div>*/}
                    {/*<div className="menu-account">*/}
                        <Link to="/" onClick={onLogout} className="txt">로그아웃</Link>
                    {/*</div>*/}
                </div>
                : 
                <div className="account">
                    {/*<div className="menu-account">*/}
                        <Link to="/login" className="txt">로그인</Link>
                    {/*</div>*/}
                    {/*<div className="menu-account">*/}
                        <Link to="/join" className="txt">회원가입</Link>
                    {/*</div>*/}
                </div>
            }
            
        </div>
    );
};



export default HeaderContainer;
