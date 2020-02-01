import React from "react";
import { Route } from "react-router-dom";
import EducationList from "./EducationList";
import EducationDetail from "./EducationDetail";
import ReactGA from "react-ga";

function Educations({ match }) {
    const onUpdate = () => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    };

    return (
        <>
            {match.params.text && match.params.text !== "detail" && (
                <Route expact path="/education/:text" component={EducationList} onUpdate={onUpdate} />
            )}
            <Route exact path="/education" component={EducationList} onUpdate={onUpdate} />
            {match.params.id && <Route path="/education/detail/:id" component={EducationDetail} onUpdate={onUpdate} />}
        </>
    );
}

export default Educations;
