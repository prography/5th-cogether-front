import React from "react";
import { Route } from "react-router-dom";
import ClubList from "./ClubList";
import ClubDetail from "./ClubDetail";
import ReactGA from "react-ga";

function Clubs({ match }) {
    const onUpdate = () => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    };

    return (
        <>
            {match.params.text && match.params.text !== "detail" && <Route expact path="/club/:text" component={ClubList} onUpdate={onUpdate} />}
            <Route exact path="/club" component={ClubList} onUpdate={onUpdate} />
            {match.params.id && <Route path="/club/detail/:id" component={ClubDetail} onUpdate={onUpdate} />}
        </>
    );
}

export default Clubs;
