import React, { useState, useCallback, useEffect, useLayoutEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Service.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import drop_arrow from "assets/drop-down.svg";
import search from "assets/search.svg";
import { introRequestAction, freqRequestAction, helpRequestAction } from "store/actions/Service";

const Service = () => {
    const dispatch = useDispatch();

    const intros = useSelector(state => state.serviceReducer.intro);
    const freqs = useSelector(state => state.serviceReducer.freq);
    const helps = useSelector(state => state.serviceReducer.help);

    let [freqState, setFreqState] = useState([]);
    let [helpState, setHelpState] = useState([]);

    const jwt = require("jsonwebtoken");
    const decoded = jwt.decode(localStorage.getItem("accessToken"));
    let json = {
        user: decoded ? decoded.user_id : null
    };

    useEffect(() => {
        dispatch(introRequestAction());
        dispatch(freqRequestAction());
        dispatch(helpRequestAction(json));
    }, []);

    useEffect(() => {
        let array = freqs.count && new Array(freqs.count).fill(false);
        setFreqState(array);

        let array2 = helps.count && new Array(helps.count).fill(false);
        setHelpState(array2);
    }, [freqs.count, helps.count]);

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
                                <div className={tab}>어서오세요, Cogether 입니다.</div>
                                {}
                            </div>
                        ) : tab === "question" ? (
                            <div className="service-box">
                                <div className={tab}>
                                    <div className="freq-head">
                                        <div className="text">사용자들이 자주 묻는 질문을 찾아보세요.</div>
                                    </div>
                                    <div className="bar"></div>
                                    <div className="freq-list">
                                        {freqs.results &&
                                            freqs.results.map((freq, index) => {
                                                return (
                                                    <div className="freq">
                                                        <div
                                                            className="freq-title"
                                                            onClick={() => {
                                                                const tempArr = [
                                                                    ...freqState.slice(0, index),
                                                                    !freqState[index],
                                                                    ...freqState.slice(index + 1)
                                                                ];
                                                                freqState.splice(index, 1, !freqState[index]);
                                                                setFreqState(tempArr);
                                                            }}
                                                        >
                                                            {freq.title}
                                                        </div>
                                                        {freqState[index] ? <div className="freq-content">{freq.contents}</div> : null}
                                                    </div>
                                                );
                                            })}
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
                                            <button className="ask-btn" onClick={() => setAsk(true)}>
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
                                                            checked="checked"
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
                                                {helps.results &&
                                                    helps.results.map((help, index) => {
                                                        return (
                                                            <div>
                                                                <div className="help">
                                                                    <div className="help-title-box">
                                                                        <div className="type">
                                                                            {help.source === "help"
                                                                                ? "1:1문의"
                                                                                : help.source === "create"
                                                                                ? "게시요청"
                                                                                : help.source === "update"
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
                                                                        <div className="date">{help.created_at.split("T")[0]}</div>
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
