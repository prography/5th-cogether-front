import React, { useState, useCallback} from "react";
import { Link } from 'react-router-dom';
import "./Header.scss";
import { useDispatch } from "react-redux";
import { logoutRequestAction } from "../../store/actions/getUser";

const HeaderContainer: React.SFC<IProps> = props => {

    const dispatch=useDispatch();
    const [username, setUsername] = useState(localStorage.getItem("username"));

    const onLogout = useCallback(( e )=> {
        e.preventDefault();
        dispatch(logoutRequestAction());
        setUsername(localStorage.getItem('username'));
    },[]);

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
            {username ? 
                <div className="account">
                    <div className="menu-account">
                        <Link to="/mypage" className="txt">마이페이지</Link>
                    </div>
                    <div className="menu-account">
                        <Link onClick={onLogout} to="/" className="txt">로그아웃</Link>
                    </div>
                </div>
                : 
                <div className="account">
                    <div className="menu-account">
                        <Link to="/login" className="txt">로그인</Link>
                    </div>
                    <div className="menu-account">
                        <Link to="/join" className="txt">회원가입</Link>
                    </div>
                </div>
            }
            
        </div>
    );
};

type IProps = {};

export default HeaderContainer;
