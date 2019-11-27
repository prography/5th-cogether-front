import React from "react";
import "./Arrow.scss";
import prev from "assets/arrow-left.svg";

const PrevArrow = () => {
    return (
        <div className="prev-arrow">
            <img className="img" src={prev} alt="prev arrow"></img>
        </div>
    );
};

export default PrevArrow;
