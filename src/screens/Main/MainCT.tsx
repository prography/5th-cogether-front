import React from "react";
import MainPT from "./MainPT";
import { clubInfo } from "module/clubModule";
import { eduInfo } from "module/eduModule";
import { confInfo } from "module/confModule";

// import { mapStateToProps, mapDispatchToProps } from "./index";
// import { returntypeof } from "react-redux-typescript";

const MainCT: React.SFC<IProps> = props => {
    React.useEffect(() => {
        props.getClub();
        props.getEdu();
        props.getConf();
    }, []);

    return <MainPT clubInfo={props.clubInfo} eduInfo={props.eduInfo} confInfo={props.confInfo}></MainPT>;
};

// const statePropTypes = returntypeof(mapStateToProps);
// const actionPropTypes = returntypeof(mapDispatchToProps);

// type IProps = typeof statePropTypes & typeof actionPropTypes & {};

type IProps = {
    clubInfo: [clubInfo];
    getClub: () => void;

    eduInfo: [eduInfo];
    getEdu: () => void;

    confInfo: [confInfo];
    getConf: () => void;
};
export default MainCT;
