import React, {useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";

const Join = () =>{

    const dispatch = useDispatch();

    const [id, setID] = useState('');
    const [username, setUsername] = useState('');
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');

    const onChangeID = useCallback( (e) =>{
        setID(e.target.value);
    });
    const onChangeName = useCallback( (e) =>{
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
        //dispatch(loginJoinAction({id,username, p1}));
    },[]);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>ID</h2>
                <input type="text" value={id} onChange={onChangeID}></input>
                <h2>username</h2>
                <input type="text" value={username} onChange={onChangeName}></input>
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