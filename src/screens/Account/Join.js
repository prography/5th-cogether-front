import React, {useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { joinRequestAction } from "../../store/actions/User";
import { Redirect } from'react-router-dom';
import "./Join.scss";
import swal from 'sweetalert';

const Join = () => {

    const dispatch = useDispatch();
    const me = useSelector( state => state.userReducer.signedUp);

    const [username, setUsername] = useState('');
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');

    const onChangeUsername = useCallback((e) => {
        setUsername(e.target.value);
    });
    const onChangeP1 = useCallback((e) => {
        setP1(e.target.value);
    });
    const onChangeP2 = useCallback((e) => {
        setP2(e.target.value);
    });
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(username === '' || p1 === '' || p2 === '') {
            swal("이메일 또는 비밀번호를 입력해주세요");
            return;
        }
        if(p1.length < 8 || p2.length < 8){
            swal("비밀번호는 8자리 이상으로 입력해주세요");
            return;
        }
        if(p1 !== p2) {
            swal("비밀번호가 일치하지 않습니다");
            return;
        }
        dispatch(joinRequestAction({username, p1, p2}));
    });

    return(
        <div className="join">
            <div className="in"> 
                {me && <Redirect to ='/loginDirect'/>}
                <form onSubmit={onSubmit}>
                    <div className="joinText">Cogether에 가입하여<br/>국내 개발 행사들을 한눈에 확인해보세요</div>
                    <br/>
                    <div className="form">
                        <div className="text">이메일</div>
                        <input className="joinInput" type="email" value={username} onChange={onChangeUsername}
                        placeholder="이메일 입력"/>
                    </div>
                    <div className="form">
                        <div className="text">비밀번호</div>
                        <input className="joinInput" type="password" value={p1} onChange={onChangeP1}
                        placeholder="비밀번호 입력"/>
                    </div>
                    <div className="form">
                        <div className="text">비밀번호 확인</div>
                        <input className="joinInput" type="password" value={p2} onChange={onChangeP2}
                        placeholder="비밀번호 입력"/>
                    </div>
                    <br/>
                    <button className="joinButton">가입하기</button>
                </form>
            </div>
        </div>
    );
}

export default Join;
