import React, { useState, useCallback } from "react";
import "./Request.scss";

const Request = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeTitle = useCallback(e => {
        setTitle(e.target.value);
    }, []);
    const onChangeContent = useCallback(e => {
        setContent(e.target.value);
    }, []);
    const onSubmit = useCallback([title, content]);

    return (
        <div className="wrap">
            <div className="request-box">
                <div className="form">
                    <div className="text">제목</div>
                    <input className="title" value={title} onChange={onChangeTitle}></input>
                </div>
                <div className="form">
                    <div className="text">내용</div>
                    <textarea className="content" value={content} onChange={onChangeContent}></textarea>
                </div>
                <button onClick={onSubmit}>제출</button>
            </div>
        </div>
    );
};

export default Request;
