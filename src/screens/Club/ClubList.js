import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { requestClub, requestSearch } from "store/actions/Info";
import { favorRequest } from "store/actions/User";
import { Link } from "react-router-dom";
import search_icon from "assets/search.svg";
import "./ClubList.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";
import { Icon } from "antd";

const ClubList = ({ match }) => {
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubReducer.clubInfo);
    const searchs = useSelector(state => state.clubReducer.search.club);

    const [liking, setLiking] = useState(false); //즐겨찾기 여부

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

    const like = () => {
        setLiking(!liking);
        dispatch(favorRequest({ type: "post" }));
        console.log(liking);
    };

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
                                                        <div className="heart">
                                                            {liking ? (
                                                                <Icon
                                                                    className="hh"
                                                                    type="heart"
                                                                    style={{ fontSize: "28px", color: "#e53935" }}
                                                                    onClick={like}
                                                                />
                                                            ) : (
                                                                <Icon className="hh" type="heart" style={{ fontSize: "28px" }} onClick={like} />
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
                        {clubs.results &&
                            clubs.results.map(club => {
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
                                                        <div className="heart">
                                                            {liking ? (
                                                                <Icon
                                                                    className="hh"
                                                                    type="heart"
                                                                    style={{ fontSize: "28px", color: "#e53935" }}
                                                                    onClick={like}
                                                                />
                                                            ) : (
                                                                <Icon className="hh" type="heart" style={{ fontSize: "28px" }} onClick={like} />
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
