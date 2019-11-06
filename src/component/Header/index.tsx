import React, { Fragment } from "react";
import HeaderContainer from "./HeaderContainer";
const Header: React.SFC<IProps> = props => {
    return (
        <Fragment>
            <HeaderContainer></HeaderContainer>
        </Fragment>
    );
};
type IProps = {};
export default Header;
