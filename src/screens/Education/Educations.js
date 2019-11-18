import React from "react";
import { Route } from "react-router-dom";
import EducationList from "./EducationList";
import EducationDetail from "./EducationDetail";

function Educations({ match }) {
    return (
        <>
            <Route exact path={match.path} component={EducationList} />
            <Route path={`${match.path}/:id`} component={EducationDetail} />
        </>
    );
}

export default Educations;
