import React, { useState } from "react";
import { Redirect } from'react-router-dom';
import "./LoginDirect.scss";

const LoginDirect = () => {

    const [go, setGo] = useState(false);

    const goLogin = () => {
        setGo(true);
    };

    return(
        <div className="go">

            { go ? <Redirect to ='/login'/> : 
                <div className="goLogin">
                    <div className="goText">회원가입이 완료되었습니다!</div>
                    <button className="goButton" onClick={goLogin}>로그인 하러가기</button>
                </div> 
            }
            
        </div>
    );
}
export default LoginDirect;
