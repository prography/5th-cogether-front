import React from "react";
import HeaderContainer from "./HeaderContainer";

const Header: React.SFC<IProps> = props => {
    return (
        <div>
            <HeaderContainer></HeaderContainer>
        </div>
    );
};

type IProps = {};

export default Header;
