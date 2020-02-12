import React, { useState, useCallback, useEffect, useLayoutEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Service.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import drop_arrow from "assets/drop-down.svg";
import search from "assets/search.svg";
import { introRequestAction, helpRequestAction } from "store/actions/Service";
import { Collapse } from "antd";
import swal from "sweetalert";

const Service = () => {
    const dispatch = useDispatch();

    var helps = useSelector(state => state.serviceReducer.help);

    var [freqState, setFreqState] = useState([]);
    var [helpState, setHelpState] = useState([]);

    const jwt = require("jsonwebtoken");
    const decoded = jwt.decode(localStorage.getItem("accessToken"));
    let json = {
        user: decoded ? decoded.user_id : null
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(introRequestAction());
        dispatch(helpRequestAction(json));
    }, []);

    const [tab, setTab] = useState("ask");
    const [ask, setAsk] = useState(false);

    const [category, setCategory] = useState("help");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const onChangeTitle = useCallback(e => {
        setTitle(e.target.value);
    }, []);
    const onChangeContent = useCallback(e => {
        setContent(e.target.value);
    }, []);

    const [dropdown, setDropdown] = useState("전체");
    const [showMenu, setShowMenu] = useState(false);
    const onSetDropdown = word => {
        setDropdown(word);
        setShowMenu(!showMenu);
    };

    const onSubmit = () => {
        json = {
            user: json.user,
            title: title,
            contents: content,
            type: category
        };
        dispatch(helpRequestAction(json));
    };

    const [small, setSmall] = useState(false);
    const [size, setSize] = useState(0);

    const { Panel } = Collapse;

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
        <div className="service-wrap">
            {small ? (
                <Fragment>
                    <div className="head">
                        <div className="text">고객센터</div>
                    </div>
                    <div className="content-box">
                        <Collapse defaultActiveKey={["1"]}>
                            <Panel header="Cogether 소개" key="1" style={{ fontSize: 18, color: "#2d2d4b", fontWeight: "bold" }}>
                                <div className="page-intro">
                                    Cogether를 통해, 매주 업데이트 되는 개발 행사 정보를 이메일로 알림받고 한눈에 모아보세요! 또한 마음에 드는 행사를
                                    즐겨찾기해 캘린더에서 일정을 확인하세요! 공유하고 싶은 행사 또는 동아리가 있으시다면 고객센터에 글을 남겨주세요!
                                    모든 Cogether 이용자들과 공유할 수 있습니다 :) 더 나은 서비스의 발전을 위해 모든 피드백을 메인 페이지 상단에 있는
                                    구글폼📝 에 남겨주시면 감사하겠습니다! 💖
                                </div>
                            </Panel>
                            <Panel header="자주 묻는 질문" key="2" style={{ fontSize: 18, color: "#2d2d4b", fontWeight: "bold" }}>
                                <Collapse>
                                    <Panel header="깃헙 로그인이 불가합니다.">
                                        <div className="freq-content">
                                            깃헙 페이지에서 로그인 후, [Settigs - Profile]에서 Public Email을 설정해주세요.
                                        </div>
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel header="내 문의 목록" key="3" style={{ fontSize: 18, color: "#2d2d4b", fontWeight: "bold" }}>
                                <Collapse>
                                    {helps &&
                                        helps.results &&
                                        helps.results.map((help, index) => {
                                            return (
                                                <Panel header={help.title}>
                                                    <div className="help-content">{help.contents}</div>
                                                </Panel>
                                            );
                                        })}
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className="head">
                        <div className="text">고객센터</div>
                    </div>
                    <div className="content-box">
                        <div className="tab-box">
                            <div className="tab" onClick={() => setTab("introduce")}>
                                Cogether 소개
                            </div>
                            <div className="tab" onClick={() => setTab("question")}>
                                자주 묻는 질문
                            </div>
                            <div
                                className="tab"
                                onClick={() => {
                                    setTab("ask");
                                    setAsk(false);
                                }}
                            >
                                내 문의 목록
                            </div>
                        </div>

                        {tab === "introduce" ? (
                            <div className="service-box">
                                <div className={tab}>
                                    <div style={{ fontSize: "26px", textAlign: "center" }}>
                                        <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>Code</span>{" "}
                                        <span style={{ fontWeight: "bold" }}>+</span>{" "}
                                        <span style={{ color: "#FD8C3E", fontWeight: "bold" }}>Together</span>{" "}
                                        <span style={{ fontWeight: "bold" }}>=</span> <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>Co</span>
                                        <span style={{ color: "#FD8C3E", fontWeight: "bold" }}>gether !</span>{" "}
                                    </div>
                                    <div style={{ color: "#2d2d4b", fontSize: "17px", margin: "10px 0 0 0", textAlign: "center" }}>
                                        이런 분들에게 Cogether를 추천합니다.
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "16px",
                                            backgroundColor: "#fafafa",
                                            margin: "40px 0 0 0",
                                            display: "flex",
                                            width: "100%",
                                            flexDirection: "row",
                                            flexWrap: "wrap"
                                        }}
                                    >
                                        <div style={{ margin: "45px 0", width: "50%", textAlign: "center" }}>
                                            <div>개발 관련 동아리/컨퍼런스/교육/세미나를 찾느라</div>
                                            이리저리 방황하시는 분들!
                                        </div>
                                        <div style={{ margin: "45px 0", width: "50%", textAlign: "center" }}>
                                            <div>새로운 행사가 업데이트 되는 소식을</div> 받고 싶으신 분들!
                                        </div>
                                        <div style={{ margin: "45px 0", width: "50%", textAlign: "center" }}>
                                            <div>개발 컨퍼런스나 세미나를 등록해놓고,</div> 자주 잊어버리셨던 분들!
                                        </div>
                                        <div style={{ margin: "45px 0", width: "50%", textAlign: "center" }}>
                                            <div>개발자들과 공유하고 싶은 </div>개발 행사 또는 동아리가 있으신 분들!
                                        </div>
                                    </div>

                                    <div style={{ height: "80px" }}></div>
                                    <div style={{ width: "100%" }}>
                                        <div style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center" }}>
                                            <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>Co</span>
                                            <span style={{ color: "#FD8C3E", fontWeight: "bold" }}>gether </span>
                                            <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>를 통해,</span>
                                        </div>
                                        <div style={{ width: "70%", margin: "0 auto" }}>
                                            <div style={{ margin: "40px 0 20px 0" }}>
                                                <span style={{ color: "#fd8c3e", marginRight: "20px" }}>▶︎ </span>
                                                <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>매주 업데이트</span> 되는 개발 행사 정보를{" "}
                                                <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>이메일</span>로 알림받고 한눈에 모아보세요!
                                            </div>
                                            <div style={{ margin: "20px 0 5px 0" }}>
                                                <div>
                                                    <span style={{ color: "#fd8c3e", marginRight: "20px" }}>▶︎ </span>마음에 드는 행사를{" "}
                                                    <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>즐겨찾기</span>해{" "}
                                                    <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>캘린더</span>에서 일정을 확인하세요!{" "}
                                                </div>
                                                <span style={{ color: "#2d2d4b", fontWeight: "bold", marginLeft: "38px" }}>공유</span>하고 싶은 행사
                                                또는 동아리가 있으시다면, <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>고객센터</span>에
                                                글을 남겨주세요!
                                            </div>
                                            <div></div>
                                            <div style={{ margin: "5px 0", marginLeft: "38px" }}>모든 Cogether 이용자들과 공유할 수 있습니다</div>
                                            <div style={{ margin: "20px 0" }}>
                                                <div>
                                                    <span style={{ color: "#fd8c3e", marginRight: "20px" }}>▶︎ </span>더 나은 서비스의 발전을 위해
                                                    모든 <span style={{ color: "#2d2d4b", fontWeight: "bold" }}>피드백</span>을 메인 페이지 상단에
                                                    있는{" "}
                                                </div>
                                                <span style={{ color: "#2d2d4b", fontWeight: "bold", marginLeft: "38px" }}>구글폼</span>에 남겨주시면
                                                감사하겠습니다 :)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : tab === "question" ? (
                            <div className="service-box">
                                <div className={tab}>
                                    <div className="freq-head">
                                        <div className="text">사용자들이 자주 묻는 질문을 찾아보세요.</div>
                                    </div>
                                    <div className="bar"></div>
                                    <div className="freq-list">
                                        <div className="freq">
                                            <div
                                                className="freq-title"
                                                onClick={() => {
                                                    const tempArr = [...freqState.slice(0, 0), !freqState[0], ...freqState.slice(0 + 1)];
                                                    freqState.splice(0, 1, !freqState[0]);
                                                    setFreqState(tempArr);
                                                }}
                                            >
                                                깃헙 로그인이 불가합니다.
                                            </div>

                                            {freqState[0] ? (
                                                <div className="freq-content">
                                                    깃헙 페이지에서 로그인 후, [Settigs - Profile]에서 Public Email을 설정해주세요.
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="freq">
                                            <div
                                                className="freq-title"
                                                onClick={() => {
                                                    const tempArr = [...freqState.slice(0, 1), !freqState[1], ...freqState.slice(1 + 1)];
                                                    freqState.splice(0, 1, !freqState[1]);
                                                    setFreqState(tempArr);
                                                }}
                                            >
                                                게시/수정 요청은 바로 반영이 되나요?
                                            </div>

                                            {freqState[1] ? (
                                                <div className="freq-content">
                                                    게시/수정 요청된 개발 행사는 일주일 내에 반영됩니다! 피드백 감사합니다 :)
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="service-box">
                                <div className={tab}>
                                    <div className="ask-head">
                                        <div className="text">
                                            {ask
                                                ? "1:1 문의 내용을 입력해주세요 "
                                                : "게시 또는 수정을 원하시거나, 궁금한 점이 있으시다면 1:1 문의를 이용해주세요."}
                                        </div>
                                        {ask ? (
                                            <button
                                                className="submit-btn"
                                                onClick={() => {
                                                    onSubmit();
                                                    setAsk(false);
                                                }}
                                            >
                                                문의 제출하기
                                            </button>
                                        ) : (
                                            <button
                                                className="ask-btn"
                                                onClick={() => {
                                                    if (decoded) {
                                                        setAsk(true);
                                                    } else {
                                                        swal("로그인 후 이용해주세요!");
                                                    }
                                                }}
                                            >
                                                1:1 문의하기
                                            </button>
                                        )}
                                    </div>

                                    {ask ? (
                                        <div className="ask-page">
                                            <div className="type">
                                                <div className="text">유형</div>
                                                <div className="category">
                                                    <div className="item">
                                                        <input
                                                            className="radio"
                                                            type="radio"
                                                            name="category"
                                                            value="post"
                                                            onClick={() => setCategory("create")}
                                                        ></input>
                                                        <span>게시 요청</span>
                                                    </div>
                                                    <div className="item">
                                                        <input
                                                            className="radio"
                                                            type="radio"
                                                            name="category"
                                                            value="modify"
                                                            onClick={() => setCategory("update")}
                                                        ></input>
                                                        <span>수정 요청</span>
                                                    </div>
                                                    <div className="item">
                                                        <input
                                                            className="radio"
                                                            type="radio"
                                                            name="category"
                                                            value="help"
                                                            onClick={() => setCategory("help")}
                                                        ></input>
                                                        <span>1:1 문의</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title">
                                                <div className="text">제목</div>
                                                <input value={title} onChange={onChangeTitle}></input>
                                            </div>
                                            <div className="content">
                                                <div className="text">문의 내용</div>
                                                <input value={content} onChange={onChangeContent}></input>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="ask-list">
                                            <div className="index">
                                                <div className="type">유형</div>
                                                <div className="title">제목</div>
                                                <div className="date">작성일</div>
                                                <div className="status">처리상태</div>
                                            </div>
                                            <div className="help-list">
                                                {helps &&
                                                    helps.results &&
                                                    helps.results.map((help, index) => {
                                                        return (
                                                            <div>
                                                                <div className="help">
                                                                    <div className="help-title-box">
                                                                        <div className="type">
                                                                            {help.type === "help"
                                                                                ? "1:1문의"
                                                                                : help.type === "create"
                                                                                ? "게시요청"
                                                                                : help.type === "update"
                                                                                ? "수정요청"
                                                                                : null}
                                                                        </div>
                                                                        <div
                                                                            className="title"
                                                                            onClick={() => {
                                                                                const tempArr = [
                                                                                    ...helpState.slice(0, index),
                                                                                    !helpState[index],
                                                                                    ...helpState.slice(index + 1)
                                                                                ];
                                                                                helpState.splice(index, 1, !helpState[index]);
                                                                                setHelpState(tempArr);
                                                                            }}
                                                                        >
                                                                            {help.title}
                                                                        </div>
                                                                        <div className="date">
                                                                            {new Date(help.created_at).getYear()} -{" "}
                                                                            {new Date(help.created_at).getMonth()} -{" "}
                                                                            {new Date(help.created_at).getDate()}
                                                                        </div>
                                                                        <div className="status">
                                                                            {help.status === "waiting" ? "답변대기" : "답변완료"}
                                                                        </div>
                                                                    </div>
                                                                    {helpState[index] ? (
                                                                        <div className="help-content-box">
                                                                            <div className="help-content">
                                                                                <div className="writer">내용</div>
                                                                                <div className="content">{help.contents}</div>
                                                                            </div>
                                                                            <div className="help-content">
                                                                                <div className="writer">답변</div>
                                                                                <div className="content">{help.answer}</div>
                                                                            </div>
                                                                        </div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default Service;
