import React from "react";
import { Route } from "react-router-dom";
import ConferenceList from "./ConferenceList";
import ConferenceDetail from "./ConferenceDetail";
import ReactGA from "react-ga";

function Conferences({ match }) {
    const onUpdate = () => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    };

    return (
        <>
            {match.params.text && match.params.text !== "detail" && (
                <Route expact path="/conference/:text" component={ConferenceList} onUpdate={onUpdate} />
            )}
            <Route exact path="/conference" component={ConferenceList} onUpdate={onUpdate} />
            {match.params.id && <Route path="/conference/detail/:id" component={ConferenceDetail} onUpdate={onUpdate} />}
        </>
    );
}

export default Conferences;
