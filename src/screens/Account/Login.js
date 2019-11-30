import React, {useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction } from "../../store/actions/getUser";
import { Redirect } from'react-router-dom';
import "./Login.scss";
import { Form, Button, Input } from 'antd';

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
        <div className="login">
            <div className="in"> 
                {me && <Redirect to='/'></Redirect>}
                <Form onSubmit={onSubmit}>
                    <div className="form">
                        <div className="text">Username</div>
                        <Input className="loginInput" type="email" value={username} onChange={onChangeUsername}/>
                    </div>
                    <div className="form">
                        <div className="text">Password</div>
                        <Input className="loginInput" type="password" value={password} onChange={onChangePassword}/>
                    </div>
                    <br/>
                    <Button className="loginButton">Login!</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;