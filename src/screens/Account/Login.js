import React, {useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction } from "../../store/actions/getUser";
import { Redirect } from'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const me = useSelector( state => state.userReducer.userInfo);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = useCallback( (e) =>{
        setUsername(e.target.value);
    });
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    });
    const onSubmit = useCallback(( e )=> {
        e.preventDefault();
        dispatch(loginRequestAction({username,password}));
    },[username, password]);

    return(
        <div>
            {me && <Redirect to='/'></Redirect>}
            <form onSubmit={onSubmit}>
                <h2>Username</h2>
                <input type="text" value={username} onChange={onChangeUsername}></input>
                <h2>Password</h2>
                <input type="password" value={password} onChange={onChangePassword}></input>
                <br/>
                <button>Login!</button>
            </form>

        </div>
    );
}

export default Login;