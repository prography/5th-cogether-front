import React from "react";
import { Route } from "react-router-dom";
import ClubList from "./ClubList";
import ClubDetail from "./ClubDetail";

function Clubs({ match }) {
    return (
        <>
            <Route exact path={match.path} component={ClubList} />
            <Route path={`${match.path}/:id`} component={ClubDetail} />
        </>
    );
}

export default Clubs;
