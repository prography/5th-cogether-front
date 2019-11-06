import React from "react";
import Header from "component/Header";
import "./Main.scss";

const MainPT: React.SFC<IProps> = props => {
    return (
        <div className="wrap">
            <Header></Header>
            <div className="page">
                <div className="intro">intro</div>
                <div className="club">
                    <div className="title">club</div>
                    <div className="itembox">
                        <div className="item">item1</div>
                        <div className="item">item2</div>
                        <div className="item">item3</div>
                    </div>
                </div>
                <div className="education">education</div>
                <div className="conference">conference</div>
            </div>
            <div className="footer">footer</div>
        </div>
    );
};

type IProps = {};

export default MainPT;
