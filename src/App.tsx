import React from "react";
import "./App.css";
import Header from "component/Header";
import Main from "screens/Main";
import Clubs from "screens/Club/Clubs";
import Educations from "screens/Education/Educations";
import Conferences from "screens/Conference/Conferences";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/club" component={Clubs} />
                    <Route path="/education" component={Educations} />
                    <Route path="/conference" component={Conferences} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
