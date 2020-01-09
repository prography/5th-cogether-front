import React from "react";
import { Route } from "react-router-dom";
import EducationList from "./EducationList";
import EducationDetail from "./EducationDetail";

function Educations({ match }) {
    return (
        <>
            {match.params.text && <Route expact path={`${match.path}/:text`} component={EducationList} />}
            <Route exact path={match.path} component={EducationList} />
            <Route path={`${match.path}/:id`} component={EducationDetail} />
        </>
    );
}

export default Educations;
