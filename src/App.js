import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import Header from "component/Header";
import Footer from "component/Footer";
import Oauth from "component/Oauth";
import Main from "screens/Main";
import Clubs from "screens/Club/Clubs";
import Educations from "screens/Education/Educations";
import Conferences from "screens/Conference/Conferences";
import Login from "screens/Account/Login";
import Join from "screens/Account/Join";
import LoginDirect from "screens/Account/LoginDirect";
import Password from "screens/Account/Password";
import Mypage from "screens/Account/Mypage";
import Request from "screens/Service/Service";
import Search from "screens/Search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { meRequestAction } from "store/actions/User";
import ReactGA from "react-ga";

const App = props => {
    const dispatch = useDispatch();
    const isAuthenticating = useSelector(state => state.userReducer.meName);
    const [token, setToken] = useState(localStorage.getItem("accessToken"));

    useEffect(() => {
        if (token !== null) {
            dispatch(meRequestAction());
        }
    }, []);

    const logPageView = () => {
        props.ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    };

    return (
        <div className="App">
            <Router>
                <Route path="/" component={logPageView} />
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/club" component={Clubs} />
                    <Route path="/club/:text/:id?" component={Clubs} />
                    <Route exact path="/education" component={Educations} />
                    <Route path="/education/:text/:id?" component={Educations} />
                    <Route exact path="/conference" component={Conferences} />
                    <Route path="/conference/:text/:id?" component={Conferences} />
                    <Route path="/login" component={Login} />
                    <Route path="/join" component={Join} />
                    <Route path="/loginDirect" component={LoginDirect} />
                    <Route path="/password" component={Password} />
                    <Route path="/mypage" component={Mypage} />
                    <Route path="/service" component={Request} />
                    <Route path="/github/callback" component={Oauth} />
                    <Route path="/search/:text" component={Search} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
