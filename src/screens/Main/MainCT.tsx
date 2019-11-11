import React from "react";
import MainPT from "./MainPT";
import { clubInfo } from "module/clubModule";
import { async } from "q";
// import { mapStateToProps, mapDispatchToProps } from "./index";
// import { returntypeof } from "react-redux-typescript";

const MainCT: React.SFC<IProps> = props => {
    React.useEffect(() => {
        props.getClub();
        console.log("clubinfo: ", props.clubInfo);
    }, []);

    return <MainPT clubInfo={props.clubInfo}></MainPT>;
};

// const statePropTypes = returntypeof(mapStateToProps);
// const actionPropTypes = returntypeof(mapDispatchToProps);

// type IProps = typeof statePropTypes & typeof actionPropTypes & {};

type IProps = {
    clubInfo: [clubInfo];
    getClub: () => void;
};
export default MainCT;
