import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from'react-router-dom';
import "./Mypage.scss";

const Mypage = () =>{

    const [username, setUsername] = useState(localStorage.getItem("username"));
    const me = useSelector(state=> state.userReducer.userInfo);
    
    useEffect(() => {
        setUsername(localStorage.getItem("username"));
    }, [localStorage.getItem("username")]);

    return(
        <div className="mypage">
            <div className="in">
                
                <div>mypage</div>
                
                {username||me ? <div className ="welcome">{username}님, 환영합니다</div>:
                <Redirect to='/'></Redirect>}
                
                
            </div>
        </div>
    );
}

export default Mypage;