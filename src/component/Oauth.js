import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from'react-router-dom';
import { githubLoginRequestAction } from "../store/actions/User";
import { meRequestAction } from '../store/actions/User';
import "./Oauth.scss";
import { BoxLoading } from 'react-loadingg';


const Oauth = () =>{

    const dispatch = useDispatch();
    const meName = useSelector( state => state.userReducer.meName);

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const code = searchParams.get("code");
    
    useEffect(()=>{
        dispatch(githubLoginRequestAction(code));
        dispatch(meRequestAction());
    } ,[]);

    return(
        <div>
            { meName ? 
                <Redirect to='/mypage'></Redirect> 
                : 
                <div className="loading">
                    <BoxLoading size="large"/>
                    <h1>Loading</h1>
                </div>
            }
        </div>
    );

}

export default Oauth;