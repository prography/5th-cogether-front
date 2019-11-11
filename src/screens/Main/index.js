import { connect } from "react-redux";
import { getClub } from "module/clubModule";
import MainCT from "./MainCT";

export const mapStateToProps = state => {
    const { clubs } = state;
    return {
        clubInfo: clubs.clubInfo
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getClub: () => {
            dispatch(getClub.request());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainCT);
