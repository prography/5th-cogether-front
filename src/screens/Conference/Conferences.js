import React from "react";
import { Route } from "react-router-dom";
import ConferenceList from "./ConferenceList";
import ConferenceDetail from "./ConferenceDetail";

function Conferences({ match }) {
    return (
        <>
            <Route exact path={match.path} component={ConferenceList} />
            <Route path={`${match.path}/:id`} component={ConferenceDetail} />
        </>
    );
}

export default Conferences;
