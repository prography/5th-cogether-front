import React, {useState, useCallback} from "react";

const Mypage = () =>{

    const [username, setUsername] = useState(localStorage.getItem("username"));
    return(
        <div>
            <h1>mypage</h1>
            {username && <h2>{username}님, 환영합니다</h2>}
        </div>
    );
}

export default Mypage;