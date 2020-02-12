import React, { useState, useCallback, useEffect, useLayoutEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../store/actions/User";
import search from "assets/search.svg";
import bar from "assets/bar.svg";
import user from "assets/user.svg";
import { Layout, Menu, Icon, Collapse, Dropdown } from "antd";

const { Panel } = Collapse;

const HeaderContainer = ({ match }) => {
    const callback = key => {
        console.log(key);
    };
    const dispatch = useDispatch();

    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const meName = useSelector(state => state.userReducer.meName);
    const mePhoto = useSelector(state => state.userReducer.mePhoto);

    // const [showMenu, setShowMenu] = useState(false);

    const [searchText, setSearchText] = useState("");
    const onSetSearchText = useCallback(e => {
        setSearchText(e.target.value);
    }, []);

    const onLogout = useCallback(e => {
        e.preventDefault();
        dispatch(logoutRequestAction());
        setToken(localStorage.getItem("accessToken"));
    }, []);

    // const showDropdownMenu = () => {
    //     setShowMenu(!showMenu);
    // };

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/mypage">마이페이지</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <Link to="/" onClick={onLogout}>
                    로그아웃
                </Link>
            </Menu.Item>
        </Menu>
    );

    useEffect(() => {
        // setShowMenu(false);
        setToken(localStorage.getItem("accessToken"));
    }, [localStorage.getItem("accessToken")]);

    const [small, setSmall] = useState(false);
    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (size > 1100) {
            // If media query matches
            setSmall(false);
        } else {
            setSmall(true);
        }
    }, [size]);

    return (
        <div className="header" style={{ width: size }}>
            {small ? (
                <Fragment>
                    <div className="z-index">
                        <span className="image">
                            <Link to="/">
                                <img className="logo" src={require("../../assets/cogether_logo@3x.png")} alt="logo" />
                            </Link>
                        </span>
                    </div>
                    <Collapse onChange={callback} expandIconPosition={"right"} defaultActiveKey={["0"]}>
                        <Panel key="1">
                            <Link to="/conference">
                                <div className="txt">컨퍼런스</div>
                            </Link>
                            <Link to="/education">
                                <div className="txt">교육</div>
                            </Link>
                            <Link to="/club">
                                <div className="txt">동아리</div>
                            </Link>
                            <Link to="/service">
                                <div className="txt">고객센터</div>
                            </Link>
                            {token && meName ? (
                                <div className="r-account">
                                    <Link to="/mypage">
                                        <div className="txt">마이페이지</div>
                                    </Link>
                                    <Link to="/" onClick={onLogout}>
                                        <div className="txt">로그아웃</div>
                                    </Link>
                                </div>
                            ) : (
                                <div className="r-account">
                                    <Link to="/login">
                                        <div className="txt">로그인</div>
                                    </Link>
                                    <Link to="/join">
                                        <div className="txt">회원가입</div>
                                    </Link>
                                </div>
                            )}
                        </Panel>
                    </Collapse>
                </Fragment>
            ) : (
                <Fragment>
                    <div className="image">
                        <Link to="/">
                            <img className="logo" src={require("../../assets/cogether_logo@3x.png")} alt="logo" />
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to="/conference" className="txt">
                            컨퍼런스
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to="/education" className="txt">
                            교육
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to="/club" className="txt">
                            동아리
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to="/service" className="txt">
                            고객센터
                        </Link>
                    </div>
                    <div className="header-search-menu">
                        <input
                            type="text"
                            className="search-txt"
                            placeholder="검색 (ex. 우아한 테크코스)"
                            value={searchText}
                            onChange={onSetSearchText}
                        />
                        <Link to={searchText === "" ? "/" : `/search/${searchText}`}>
                            <img className="search-btn" src={search} />
                        </Link>
                    </div>
                    <img className="bar" src={bar} />
                    {token && meName ? (
                        <div className="account">
                            <Dropdown overlay={menu} trigger={["click"]}>
                                <a className="ant-dropdown-link" href="#">
                                    <div className="username">{meName.split('"')[1].split("@")[0]}</div>
                                    <div className="usericon">{mePhoto ? <img className="circle" src={mePhoto} /> : <img src={user} />}</div>
                                </a>
                            </Dropdown>
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
                </Fragment>
            )}
        </div>
    );
};

export default HeaderContainer;
