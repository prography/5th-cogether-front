import React, {useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { joinRequestAction } from "../../store/actions/getUser";
import { Redirect } from'react-router-dom';

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
        if(p1 !== p2) return;
        dispatch(joinRequestAction({username, p1, p2}));
    });

    return(
        <div>
            {me && <Redirect to ='/'></Redirect>}
            <form onSubmit={onSubmit}>
                <h2>Username</h2>
                <input type="text" value={username} onChange={onChangeUsername}></input>
                <h2>Password1</h2>
                <input type="password" value={p1} onChange={onChangeP1}></input>
                <h2>Password2</h2>
                <input type="password" value={p2} onChange={onChangeP2}></input>
                <br/>
                <button>Register!</button>
            </form>

        </div>
    );
}

export default Join;