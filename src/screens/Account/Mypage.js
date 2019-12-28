import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from'react-router-dom';
import "./Mypage.scss";
import {meRequestAction} from '../../store/actions/getAuth';

const Mypage = () =>{

    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const me = useSelector(state=> state.meReducer.meInfo);

    useEffect(()=>{
        setToken(localStorage.getItem("accessToken"));
    }, [localStorage.getItem("accessToken")]);

    return(
        <div className="mypage">
            <div className="in">
                
                <div>mypage</div>
                
                { token ? <div className ="welcome">{me}님, 환영합니다</div>:
                <Redirect to='/'></Redirect>}
                
                
            </div>
        </div>
    );
}

export default Mypage;