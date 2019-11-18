import React, {useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction } from "../../store/actions/getUser";

const Login = () => {

    const dispatch = useDispatch();
    const me = useSelector( state => state.userReducer.userInfo);

    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    const onChangeID = useCallback( (e) =>{
        setID(e.target.value);
    });
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    });
    const onSubmit = useCallback(( e )=> {
        e.preventDefault();
        dispatch(loginRequestAction({id,password}));
    },[id, password]);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>ID</h2>
                <input type="text" value={id} onChange={onChangeID}></input>
                <h2>Password</h2>
                <input type="password" value={password} onChange={onChangePassword}></input>
                <br/>
                <button>Login!</button>
            </form>

        </div>
    );
}

export default Login;