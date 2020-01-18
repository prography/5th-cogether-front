import React from "react";
import { Route } from "react-router-dom";
import ClubList from "./ClubList";
import ClubDetail from "./ClubDetail";

function Clubs({ match }) {
    return (
        <>
            {match.params.text && match.params.text !== "detail" && <Route expact path="/club/:text" component={ClubList} />}
            <Route exact path="/club" component={ClubList} />
            {match.params.id && <Route path="/club/detail/:id" component={ClubDetail} />}
        </>
    );
}

export default Clubs;
