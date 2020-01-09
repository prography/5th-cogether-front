import React, { useState, useCallback, useEffect, Fragment } from "react";
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
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Search = ({ match }) => {
    const dispatch = useDispatch();
    let searchs = useSelector(state => state.clubReducer.search, {});

    useEffect(() => {
        dispatch(requestSearch(match.params.text));
    }, [match.params.text]);

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
                                                        <Link to={`/club/${search.id}`}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={search.photo ? search.photo : require("assets/placeholder.png")}
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
                                                            <a
                                                                className="detail-link"
                                                                href={`javascript:window.open('${search.external_link}','_blank')`}
                                                            >
                                                                <Button size="small" color="#2d2d4b">
                                                                    더 알아보기
                                                                </Button>
                                                            </a>
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
                                                        <Link to={`/conference/${search.id}`}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={search.photo ? search.photo : require("assets/placeholder.png")}
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
                                                            <a
                                                                className="detail-link"
                                                                href={`javascript:window.open('${search.external_link}','_blank')`}
                                                            >
                                                                <Button size="small" color="#2d2d4b">
                                                                    더 알아보기
                                                                </Button>
                                                            </a>
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
                                                        <Link to={`/education/${search.id}`}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={search.photo ? search.photo : require("assets/placeholder.png")}
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
                                                            <a
                                                                className="detail-link"
                                                                href={`javascript:window.open('${search.external_link}','_blank')`}
                                                            >
                                                                <Button size="small" color="#2d2d4b">
                                                                    더 알아보기
                                                                </Button>
                                                            </a>
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
