import React, { useState, useEffect } from "react";
import { Redirect } from'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import user from "assets/user.png";
import "./Mypage.scss";
import { Switch, Menu, Dropdown, Button } from "antd";
import Calendars from "component/Calendar/Calendar";

const Mypage = () => {
    const dispatch = useDispatch();

    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const meName = useSelector(state => state.userReducer.meName);
    const mePhoto = useSelector(state => state.userReducer.mePhoto);
    const [item, setItem] = useState("전체");
    console.log(mePhoto);

    const menu = (
        <Menu>
            <Menu.Item onClick={() => setItem("전체")}>전체</Menu.Item>
            <Menu.Item onClick={() => setItem("동아리")}>동아리</Menu.Item>
            <Menu.Item onClick={() => setItem("컨퍼런스")}>컨퍼런스</Menu.Item>
            <Menu.Item onClick={() => setItem("교육")}>교육</Menu.Item>
        </Menu>
    );

    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
    }, [localStorage.getItem("accessToken")]);

    if(meName){
        return (
            <div className="mypage-wrap">
                <div className="head">
                    <div className="text">마이페이지</div>
                </div>
                <div className="content-box">
                    <div className="section">
                        <div className="section-title"> 내 정보 관리</div>
                        <div className="section-head">
                            <div className="detail">내 개인 정보를 수정해주세요.</div>
                            <button className="save">저장하기</button>
                        </div>
                        <div className="section-content">
                            <div className="photo">
                                { mePhoto ? 
                                    <img style={{ width: 100, height: 100 }} src={mePhoto} /> 
                                    : 
                                    <img style={{ width: 100, height: 100 }} src={user} />
                                }
                                <button className="photo-button">사진변경</button>
                            </div>
                            <div className="info-box">
                                <div className="info">
                                    <div className="key">이메일</div>
                                    <div className="value">{meName}</div>
                                </div>
                                <div className="info">
                                    <div className="key">비밀번호</div>
                                    <input className="value" value="1234" type="password"></input>
                                </div>
                                <div className="info">
                                    <div className="key">이메일 수신 알림</div>
                                    <div className="value-1">
                                        <Switch defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-title"> 캘린더</div>
                        <div className="section-head">
                            <div className="detail">즐겨찾기한 일정들을 한눈에 모아보세요.</div>
                        </div>
                        <div className="section-content">
                            <Calendars></Calendars>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-title"> 즐겨찾기 목록</div>
                        <div className="section-head">
                            <div className="detail"></div>
                        </div>
                        <div className="section-content">
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Button>{item}</Button>
                            </Dropdown>
                            즐겨찾기 목록 카드로
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <Redirect to='/login' />
        );
    }
};

export default Mypage;
