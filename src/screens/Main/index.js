import { connect } from "react-redux";
import { getClub } from "module/clubModule";
import { getEdu } from "module/eduModule";
import { getConf } from "module/confModule";
import MainCT from "./MainCT";

export const mapStateToProps = state => {
    const { clubs, edus, confs } = state;
    return {
        clubInfo: clubs.clubInfo,
        eduInfo: edus.eduInfo,
        confInfo: confs.confInfo
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getClub: () => {
            dispatch(getClub.request());
        },
        getEdu: () => {
            dispatch(getEdu.request());
        },
        getConf: () => {
            dispatch(getConf.request());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainCT);
