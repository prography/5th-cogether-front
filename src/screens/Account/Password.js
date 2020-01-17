import React, { useState, useCallback } from "react";
import { Redirect } from'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { passwordModifyRequestAction } from "../../store/actions/User";
import "./Password.scss";
import swal from "sweetalert";

const Password = () => {
    const dispatch = useDispatch();
    const passwordEdited = useSelector( state => state.userReducer.passwordEdited);
    const meName = useSelector( state => state.userReducer.meName);
    const [current_password, setCurrent_password] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const onChangeCurrent_password = useCallback((e) => {
        setCurrent_password(e.target.value);
    });
    const onChangePassword1 = useCallback((e) => {
        setPassword1(e.target.value);
    });
    const onChangePassword2 = useCallback((e) => {
        setPassword2(e.target.value);
    });

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(passwordModifyRequestAction({current_password,password1,password2}));
    },[current_password,password1,password2]);

    return(
        <div>
            { passwordEdited && <Redirect to='/mypage' /> }
            { !meName && <Redirect to='/login' /> }
            <form onSubmit={onSubmit}>
                <div className="form">
                    <div className="in">
                        <div className="title">비밀번호 변경</div>
                        <div>
                            <div className="text">기존 비밀번호 입력</div>
                            <input className="input" type="password" value={current_password} onChange={onChangeCurrent_password} />
                        
                            <div className="text">새 비밀번호 입력</div>
                            <input className="input" type="password" value={password1} onChange={onChangePassword1} />
                        
                            <div className="text">새 비밀번호 확인</div>
                            <input className="input" type="password" value={password2} onChange={onChangePassword2} />
                        </div>
                        <button className="button">변경하기</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Password;
