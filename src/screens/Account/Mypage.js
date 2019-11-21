import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from'react-router-dom';

const Mypage = () =>{

    const [username, setUsername] = useState(localStorage.getItem("username"));
    const me = useSelector(state=> state.userReducer.userInfo);
    
    useEffect(() => {
        setUsername(localStorage.getItem("username"));
    }, [localStorage.getItem("username")]);
    return(
        <div>
            <h1>mypage</h1>
            
            {username||me ? <h2>{username}님, 환영합니다</h2>:
            <Redirect to='/'></Redirect>}
        </div>
    );
}

export default Mypage;