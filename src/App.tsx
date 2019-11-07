import React from "react";
import "./App.css";
import Header from "component/Header";
import Main from "screens/Main";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Main} />
                </Switch>

            </Router>
        </div>
    );
};

export default App;
