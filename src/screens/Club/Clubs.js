import React from "react";
import { Route } from "react-router-dom";
import ClubList from "./ClubList";
import ClubDetail from "./ClubDetail";

function Clubs({ match }) {
    return (
        <>
            {match.params.text && <Route expact path={`${match.path}/:text`} component={ClubList} />}
            <Route exact path={match.path} component={ClubList} />
            <Route path={`${match.path}/:id`} component={ClubDetail} />
        </>
    );
}

export default Clubs;
