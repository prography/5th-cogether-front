import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction } from "../../store/actions/User";
import { Redirect } from "react-router-dom";
import "./Login.scss";
import swal from "sweetalert";
import { GithubLoginButton } from "react-social-login-buttons";

const Login = () => {
    const dispatch = useDispatch();
    const meName = useSelector( state => state.userReducer.meName);
    const [token, setToken] = useState(localStorage.getItem("accessToken"));

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = useCallback((e) => {
        setUsername(e.target.value);
    });

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    });

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(username === '') {
            swal("이메일을 입력해주세요");
            return;
        }
        if(password === '') {
            swal("비밀번호를 입력해주세요");
            return;
        }
        dispatch(loginRequestAction({username,password}));
    }, [username, password]);

    const onGithub = () => {
        window.location.href="https://cogether.azurewebsites.net/account/login/github/";
    };

    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
    }, [localStorage.getItem("accessToken")]);
    
    return(
        <div className="login">
            <div className="in"> 
                {token && <Redirect to='/'/>}
                <form onSubmit={onSubmit}>
                    <div className="loginText">로그인</div>
                    <br />
                    <br />
                    <div className="form">
                        <div className="text">이메일</div>
                        <input className="loginInput" type="email" value={username} onChange={onChangeUsername} placeholder="이메일 입력" />
                    </div>
                    <div className="form">
                        <div className="text">비밀번호</div>
                        <input className="loginInput" type="password" value={password} onChange={onChangePassword} placeholder="비밀번호 입력" />
                    </div>
                    <br />
                    <button className="loginButton">로그인</button>
                </form>
                <div className="githubButton">
                    <GithubLoginButton onClick={onGithub} />
                </div>
            </div>
        </div>
    );
};

export default Login;
