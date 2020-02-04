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

const App = () => {
    const dispatch = useDispatch();
    const isAuthenticating = useSelector(state => state.userReducer.meName);
    const [token, setToken] = useState(localStorage.getItem("accessToken"));

    ReactGA.initialize("UA-156710590-01");
    if (window.location.host === "localhost:3000") {
        ReactGA.initialize("UA-156710590-2");
    }

    ReactGA.pageview(window.location.pathname + window.location.search);

    const onUpdate = () => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    };

    useEffect(() => {
        if (token !== null) {
            dispatch(meRequestAction());
        }
    }, []);

    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} onUpdate={onUpdate} />
                    <Route exact path="/club" component={Clubs} onUpdate={onUpdate} />
                    <Route path="/club/:text/:id?" component={Clubs} onUpdate={onUpdate} />
                    <Route exact path="/education" component={Educations} onUpdate={onUpdate} />
                    <Route path="/education/:text/:id?" component={Educations} onUpdate={onUpdate} />
                    <Route exact path="/conference" component={Conferences} onUpdate={onUpdate} />
                    <Route path="/conference/:text/:id?" component={Conferences} onUpdate={onUpdate} />
                    <Route path="/login" component={Login} onUpdate={onUpdate} />
                    <Route path="/join" component={Join} onUpdate={onUpdate} />
                    <Route path="/loginDirect" component={LoginDirect} onUpdate={onUpdate} />
                    <Route path="/password" component={Password} onUpdate={onUpdate} />
                    <Route path="/mypage" component={Mypage} onUpdate={onUpdate} />
                    <Route path="/service" component={Request} onUpdate={onUpdate} />
                    <Route path="/github/callback" component={Oauth} onUpdate={onUpdate} />
                    <Route path="/search/:text" component={Search} onUpdate={onUpdate} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
