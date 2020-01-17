import React from "react";
import { Route } from "react-router-dom";
import ConferenceList from "./ConferenceList";
import ConferenceDetail from "./ConferenceDetail";

function Conferences({ match }) {
    return (
        <>
            {match.params.text && match.params.text !== "detail" && <Route expact path="/conference/:text" component={ConferenceList} />}
            <Route exact path="/conference" component={ConferenceList} />
            {match.params.id && <Route path="/conference/detail/:id" component={ConferenceDetail} />}
        </>
    );
}

export default Conferences;
