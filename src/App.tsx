import React from "react";
import "./App.css";
import Header from "component/Header";
import Main from "screens/Main";
import ClubList from "screens/List/Club";
import EducationList from "screens/List/Education";
import ConferenceList from "screens/List/Conference";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/club" component={ClubList} />
                    <Route path="/education" component={EducationList} />
                    <Route path="/conference" component={ConferenceList} />
                </Switch>

            </Router>
        </div>
    );
};

export default App;
