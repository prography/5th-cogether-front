import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import search_icon from "assets/search.svg";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { requestConference, requestSearch } from "store/actions/Info";
import { Link } from "react-router-dom";
import "./ConferenceList.scss";

const ConferenceList = ({ match }) => {
    const dispatch = useDispatch();
    const conferences = useSelector(state => state.conferenceReducer.conferenceInfo);
    const searchs = useSelector(state => state.clubReducer.search.conf);

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
            dispatch(requestConference());
        }
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
                <Link to={searchText === "" ? "/conference" : `/conference/${searchText}`}>
                    <img className="search-btn" src={search_icon} onClick={search} />
                </Link>
            </div>
            <Container>
                <Row>
                    {match.params.text
                        ? searchs &&
                          searchs.map(conf => {
                              return (
                                  <Col md={4}>
                                      <div className="block">
                                          <Card className={classes.card}>
                                              <Link to={`/conference/detail/${conf.id}`}>
                                                  <CardActionArea>
                                                      <CardMedia
                                                          className={classes.media}
                                                          image={conf.photo ? conf.photo : require("assets/placeholder.png")}
                                                      />
                                                      <CardContent>
                                                          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                              <div className={classes.text_size}>{conf.host}</div>
                                                          </Typography>
                                                          <Typography variant="body2" color="textSecondary" component="p">
                                                              <div className={classes.body_size}>{conf.title}</div>
                                                              <div>
                                                                  {conf.start_at.split("T")[0]} ~ {conf.end_at.split("T")[0]}
                                                              </div>
                                                          </Typography>
                                                      </CardContent>
                                                  </CardActionArea>
                                              </Link>
                                              <CardActions>
                                                  <a className="detail-link" href={`javascript:window.open('${conf.external_link}','_blank')`}>
                                                      <Button size="small" color="#2d2d4b">
                                                          더 알아보기
                                                      </Button>
                                                  </a>
                                              </CardActions>
                                          </Card>
                                      </div>
                                  </Col>
                              );
                          })
                        : conferences.results &&
                          conferences.results.map(conf => {
                              return (
                                  <Col md={4}>
                                      <div className="block">
                                          <Card className={classes.card}>
                                              <Link to={`conference/detail/${conf.id}`}>
                                                  <CardActionArea>
                                                      <CardMedia
                                                          className={classes.media}
                                                          image={conf.photo ? conf.photo : require("assets/placeholder.png")}
                                                      />
                                                      <CardContent>
                                                          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                              <div className={classes.text_size}>{conf.host}</div>
                                                          </Typography>
                                                          <Typography variant="body2" color="textSecondary" component="p">
                                                              <div className={classes.body_size}>{conf.title}</div>
                                                              <div>
                                                                  {conf.start_at.split("T")[0]} ~ {conf.end_at.split("T")[0]}
                                                              </div>
                                                          </Typography>
                                                      </CardContent>
                                                  </CardActionArea>
                                              </Link>
                                              <CardActions>
                                                  <a className="detail-link" href={`javascript:window.open('${conf.external_link}','_blank')`}>
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
        </div>
    );
};

export default ConferenceList;
