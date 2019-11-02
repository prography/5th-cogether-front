import React from "react";
import Header from "component/Header";

const MainPT: React.SFC<IProps> = props => {
    return (
        <div className="wrap">
            <Header></Header>
        </div>
    );
};

type IProps = {};

export default MainPT;
