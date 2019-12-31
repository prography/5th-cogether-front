import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from'react-router-dom';
import { githubLoginRequestAction } from "../store/actions/User";
import { meRequestAction } from '../store/actions/User';

const Oauth = () =>{

    const dispatch = useDispatch();
    const me = useSelector( state => state.userReducer.meInfo);

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const code = searchParams.get("code");
    
    useEffect(()=>{
        dispatch(githubLoginRequestAction(code));
        dispatch(meRequestAction());
    } ,[]);

    return(
        <div>
            { me ? <Redirect to='/mypage'></Redirect>: <h1>Loading</h1>}
        </div>
    );

}

export default Oauth;