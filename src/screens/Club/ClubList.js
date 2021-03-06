import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { requestClub, requestSearch } from "store/actions/Info";
import { Link } from "react-router-dom";
import search_icon from "assets/search.svg";
import "./ClubList.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";
import { favorRequestAction } from "store/actions/User";

const ClubList = ({ match }) => {
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubReducer.clubInfo);
    const searchs = useSelector(state => state.clubReducer.search.club);
    var favors = useSelector(state => state.userReducer.favor);
    const [searchText, setSearchText] = useState(match.params.text ? match.params.text : "");

    const onSetSearchText = useCallback(e => {
        setSearchText(e.target.value);
    }, []);

    const search = () => {
        dispatch(requestSearch(searchText));
    };

    useEffect(() => {
        if (match.params.text) {
            dispatch(requestSearch(match.params.text));
        } else {
            dispatch(requestClub());
        }
    }, [match.params.text]);

    const url = "https://cogether.kr";
    const copy = () => {
        swal("클립보드 복사가 완료되었습니다");
    };

    const addLike = id => {
        const data = { type: "post", id: id };
        dispatch(favorRequestAction(data));
    };

    const like = id => {
        return favors.findIndex(x => x.id === id);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(favorRequestAction({ type: "get" }));
    }, []);

    const useStyles = makeStyles({
        card: {
            maxWidth: 310
        },
        media: {
            height: 150,
            backgroundColor: "#000000"
        },
        text: {
            height: 60
        },
        text_size: {
            fontSize: 18,
            textDecoration: "none",
            color: "#2d2d4b",
            fontWeight: "bold"
        },
        body_size: {
            fontSize: 16,
            textDecoration: "none",
            color: "black"
        }
    });
    const classes = useStyles();

    if (match.params.text) {
        return (
            <div>
                <div className="navPic">
                    <div className="slogan">
                        Co.gether와 함께
                        <br />
                        원하는 목표를 성취해보세요
                    </div>
                </div>
                <div className="search-menu">
                    <input type="text" className="search-txt" placeholder="검색" value={searchText} onChange={onSetSearchText} />
                    <Link to={searchText === "" ? "/club" : `/club/${searchText}`}>
                        <img className="search-btn" src={search_icon} onClick={search} />
                    </Link>
                </div>
                <Container>
                    <Row>
                        {searchs &&
                            searchs.map(club => {
                                return (
                                    <Col md={4}>
                                        <div className="block">
                                            <Card className={classes.card}>
                                                <Link to={`/club/detail/${club.id}`}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={club.photo ? club.photo.photo : require("assets/placeholder.png")}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                                <div className={classes.text_size}>{club.host}</div>
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                <div className={classes.body_size}>{club.title}</div>
                                                                <div>
                                                                    {club.start_at.split("T")[0]} ~ {club.end_at.split("T")[0]}
                                                                </div>
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Link>
                                                <CardActions>
                                                    <div className="icons">
                                                        <a className="detail-link">
                                                            <CopyToClipboard
                                                                text={url
                                                                    .concat(`${match.url}/detail/${club.id}`)
                                                                    .replace(`${match.params.text}/`, "")}
                                                            >
                                                                <div className="share">
                                                                    <img className="ss" src={require("assets/share.png")} onClick={copy}></img>
                                                                </div>
                                                            </CopyToClipboard>
                                                        </a>
                                                        <div className="heart" onClick={() => addLike(club.id)}>
                                                            {like(club.id) !== -1 ? (
                                                                <FavoriteIcon style={{ color: "#e53935", fontSize: "30px" }} />
                                                            ) : (
                                                                <FavoriteBorderIcon style={{ fontSize: "30px" }} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Col>
                                );
                            })}
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <div className="navPic">
                    <div className="slogan">
                        Co.gether와 함께
                        <br />
                        원하는 목표를 성취해보세요
                    </div>
                </div>
                <div className="search-menu">
                    <input type="text" className="search-txt" placeholder="검색" value={searchText} onChange={onSetSearchText} />
                    <Link to={searchText === "" ? "/club" : `/club/${searchText}`}>
                        <img className="search-btn" src={search_icon} onClick={search} />
                    </Link>
                </div>
                <Container>
                    <Row>
                        {clubs &&
                            clubs.map(club => {
                                return (
                                    <Col md={4}>
                                        <div className="block">
                                            <Card className={classes.card}>
                                                <Link to={`/club/detail/${club.id}`}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={club.photo ? club.photo.photo : require("assets/placeholder.png")}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                                <div className={classes.text_size}>{club.host}</div>
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                <div className={classes.body_size}>{club.title}</div>
                                                                <div>
                                                                    {club.start_at.split("T")[0]} ~ {club.end_at.split("T")[0]}
                                                                </div>
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Link>
                                                <CardActions>
                                                    <div className="icons">
                                                        <a className="detail-link">
                                                            <CopyToClipboard text={url.concat(`${match.url}/detail/${club.id}`)}>
                                                                <div className="share">
                                                                    <img className="ss" src={require("assets/share.png")} onClick={copy}></img>
                                                                </div>
                                                            </CopyToClipboard>
                                                        </a>
                                                        <div className="heart" onClick={() => addLike(club.id)}>
                                                            {like(club.id) !== -1 ? (
                                                                <FavoriteIcon style={{ color: "#e53935", fontSize: "30px" }} />
                                                            ) : (
                                                                <FavoriteBorderIcon style={{ fontSize: "30px" }} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </CardActions>
                                            </Card>
                                        </div>
                                    </Col>
                                );
                            })}
                    </Row>
                </Container>
            </div>
        );
    }
};

export default ClubList;
