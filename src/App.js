import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "component/Header";
import Main from "screens/Main";
import Clubs from "screens/Club/Clubs";
import Educations from "screens/Education/Educations";
import Conferences from "screens/Conference/Conferences";
import Login from "screens/Account/Login";
import Join from "screens/Account/Join";
import LoginDirect from "screens/Account/LoginDirect";
import Mypage from "screens/Account/Mypage";
import Request from "screens/Request/Request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { meRequestAction } from "store/actions/getAuth";

const App = () => {

    const dispatch = useDispatch();
    const isAuthenticating = useSelector(state=> state.userReducer.userInfo);

    useEffect(()=>{
        isAuthenticating ?
        console.log(isAuthenticating) 
        :
        dispatch(meRequestAction());
    });
    
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/club" component={Clubs} />
                    <Route path="/education" component={Educations} />
                    <Route path="/conference" component={Conferences} />
                    <Route path="/login" component={Login} />
                    <Route path="/join" component={Join} />
                    <Route path="/loginDirect" component={LoginDirect} />
                    <Route path="/mypage" component={Mypage} />
                    <Route path="/userRequest" component={Request} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
