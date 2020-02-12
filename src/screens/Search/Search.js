import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Search.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { requestSearch } from "store/actions/Info";
import { Row, Col, Container } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { favorRequestAction } from "store/actions/User";

const Search = ({ match }) => {
    const dispatch = useDispatch();
    let searchs = useSelector(state => state.clubReducer.search, {});
    var favors = useSelector(state => state.userReducer.favor);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(requestSearch(match.params.text));
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
        dispatch(favorRequestAction({ type: "get" }));
    }, []);

    const useStyles = makeStyles({
        card: {
            maxWidth: 300
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

    return (
        <div className="search-wrap">
            <div className="head">
                <div className="text">"{match.params.text}" 에 대한 검색결과</div>
            </div>
            <div className="content">
                {searchs.count === 0 ? (
                    <div className="none">해당하는 검색 결과가 없습니다.</div>
                ) : (
                    <Fragment>
                        <div className="content-head">
                            <div className="name">동아리</div>
                            <Link to={`/club`}>
                                <button className="btn">전체보기</button>
                            </Link>
                        </div>
                        <Container>
                            <Row>
                                {searchs.club &&
                                    searchs.club.map(search => {
                                        return (
                                            <Col md={4}>
                                                <div className="block">
                                                    <Card className={classes.card}>
                                                        <Link to={`/club/detail/${search.id}`}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={search.photo ? search.photo.photo : require("assets/placeholder.png")}
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                                        <div className={classes.text_size}>{search.host}</div>
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        <div className={classes.body_size}>{search.title}</div>
                                                                        <div>
                                                                            {search.start_at.split("T")[0]} ~ {search.end_at.split("T")[0]}
                                                                        </div>
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Link>
                                                        <CardActions>
                                                            <div className="three-icons">
                                                                <a
                                                                    className="detail-link"
                                                                    href={`javascript:window.open('${search.external_link}','_blank')`}
                                                                >
                                                                    <div className="page">
                                                                        <img className="pp" src={require("assets/page.png")}></img>
                                                                    </div>
                                                                </a>
                                                                <a className="detail-link">
                                                                    <CopyToClipboard text={url.concat(`/club/detail/${search.id}`)}>
                                                                        <div className="share">
                                                                            <img
                                                                                className="ss"
                                                                                src={require("assets/share.png")}
                                                                                onClick={copy}
                                                                            ></img>
                                                                        </div>
                                                                    </CopyToClipboard>
                                                                </a>
                                                                <div className="heart" onClick={() => addLike(search.id)}>
                                                                    {like(search.id) !== -1 ? (
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

                        <div className="content-head">
                            <div className="name">컨퍼런스</div>
                            <Link to={`/conference/${match.params.text}`}>
                                <button className="btn">전체보기</button>
                            </Link>
                        </div>
                        <Container>
                            <Row md={6}>
                                {searchs.conf &&
                                    searchs.conf.map(search => {
                                        return (
                                            <Col md={4}>
                                                <div className="block">
                                                    <Card className={classes.card}>
                                                        <Link to={`/conference/detail/${search.id}`}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={search.photo ? search.photo.photo : require("assets/placeholder.png")}
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                                        <div className={classes.text_size}>{search.host}</div>
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        <div className={classes.body_size}>{search.title}</div>
                                                                        <div>
                                                                            {search.start_at.split("T")[0]} ~ {search.end_at.split("T")[0]}
                                                                        </div>
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Link>
                                                        <CardActions>
                                                            <div className="three-icons">
                                                                <a
                                                                    className="detail-link"
                                                                    href={`javascript:window.open('${search.external_link}','_blank')`}
                                                                >
                                                                    <div className="page">
                                                                        <img className="pp" src={require("assets/page.png")}></img>
                                                                    </div>
                                                                </a>
                                                                <a className="detail-link">
                                                                    <CopyToClipboard text={url.concat(`/conference/detail/${search.id}`)}>
                                                                        <div className="share">
                                                                            <img
                                                                                className="ss"
                                                                                src={require("assets/share.png")}
                                                                                onClick={copy}
                                                                            ></img>
                                                                        </div>
                                                                    </CopyToClipboard>
                                                                </a>
                                                                <div className="heart" onClick={() => addLike(search.id)}>
                                                                    {like(search.id) !== -1 ? (
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

                        <div className="content-head">
                            <div className="name">교육</div>
                            <Link to={`/education`}>
                                <button className="btn">전체보기</button>
                            </Link>
                        </div>
                        <Container>
                            <Row md={6}>
                                {searchs.edu &&
                                    searchs.edu.map(search => {
                                        return (
                                            <Col md={4}>
                                                <div className="block">
                                                    <Card className={classes.card}>
                                                        <Link to={`/education/detail${search.id}`}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={search.photo ? search.photo.photo : require("assets/placeholder.png")}
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                                        <div className={classes.text_size}>{search.host}</div>
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        <div className={classes.body_size}>{search.title}</div>
                                                                        <div>
                                                                            {search.start_at.split("T")[0]} ~ {search.end_at.split("T")[0]}
                                                                        </div>
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Link>
                                                        <CardActions>
                                                            <div className="three-icons">
                                                                <a
                                                                    className="detail-link"
                                                                    href={`javascript:window.open('${search.external_link}','_blank')`}
                                                                >
                                                                    <div className="page">
                                                                        <img className="pp" src={require("assets/page.png")}></img>
                                                                    </div>
                                                                </a>
                                                                <a className="detail-link">
                                                                    <CopyToClipboard text={url.concat(`/education/detail/${search.id}`)}>
                                                                        <div className="share">
                                                                            <img
                                                                                className="ss"
                                                                                src={require("assets/share.png")}
                                                                                onClick={copy}
                                                                            ></img>
                                                                        </div>
                                                                    </CopyToClipboard>
                                                                </a>
                                                                <div className="heart" onClick={() => addLike(search.id)}>
                                                                    {like(search.id) !== -1 ? (
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
                    </Fragment>
                )}
            </div>
        </div>
    );
};

export default Search;
