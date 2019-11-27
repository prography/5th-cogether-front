import React, {useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { joinRequestAction } from "../../store/actions/getUser";
import { Redirect } from'react-router-dom';
import "./Join.scss";

const Join = () =>{

    const dispatch = useDispatch();
    const me = useSelector( state => state.userReducer.userInfo);

    const [username, setUsername] = useState('');
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');

    const onChangeUsername = useCallback( (e) =>{
        setUsername(e.target.value);
    });
    const onChangeP1 = useCallback( (e) =>{
        setP1(e.target.value);
    });
    const onChangeP2 = useCallback( (e) =>{
        setP2(e.target.value);
    });
    const onSubmit = useCallback(( e )=> {
        e.preventDefault();
        if(p1 !== p2) {
            alert("비밀번호가 일치하지 않습니다");
            return;
        }
        dispatch(joinRequestAction({username, p1, p2}));
    });

    return(
        <div className="join">
            <div className="in"> 
                {me && <Redirect to ='/'></Redirect>}
                <form onSubmit={onSubmit}>
                    <div className="form">
                        <div className="text">Username</div>
                        <input className="joinInput" type="email" value={username} onChange={onChangeUsername}></input>
                    </div>
                    <div className="form">
                        <div className="text">Password1</div>
                        <input className="joinInput" type="password" value={p1} onChange={onChangeP1}></input>
                    </div>
                    <div className="form">
                        <div className="text">Password2</div>
                        <input className="joinInput" type="password" value={p2} onChange={onChangeP2}></input>
                    </div>
                    <br/>
                    <button className="joinButton">Register!</button>
                </form>
            </div>
        </div>
    );
}

export default Join;