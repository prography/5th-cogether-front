import React from "react";
import "./Arrow.scss";
import next from "assets/arrow-right.svg";

const NextArrow = () => {
    return (
        <div className="next-arrow">
            <img className="img" src={next} alt="next arrow"></img>
        </div>
    );
};

export default NextArrow;
