import React from "react";
import { Route } from "react-router-dom";
import EducationList from "./EducationList";
import EducationDetail from "./EducationDetail";

function Educations({ match }) {
    return (
        <>
            {match.params.text && match.params.text !== "detail" && <Route expact path="/education/:text" component={EducationList} />}
            <Route exact path="/education" component={EducationList} />
            {match.params.id && <Route path="/education/detail/:id" component={EducationDetail} />}
        </>
    );
}

export default Educations;
