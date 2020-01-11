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
import { requestEducation, requestSearch } from "store/actions/Info";
import { Link } from "react-router-dom";
import "./EducationList.scss";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import swal from 'sweetalert';
import { Icon } from "antd";

const EducationList = ({ match }) => {
    const dispatch = useDispatch();
    const educations = useSelector(state => state.educationReducer.educationInfo);
    const searchs = useSelector(state => state.clubReducer.search.edu);

    const [liking, setLiking] = useState(false);  //즐겨찾기 여부

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
            dispatch(requestEducation());
        }
    }, [match.params.text]);

    const url = "https://cogether.kr";
    const copy = () => {
        swal("클립보드 복사가 완료되었습니다");
    };

    const like = () => {
        setLiking(!liking);
        console.log(liking);
    };
    
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
        },
    });
    const classes = useStyles();

    if( match.params.text ){
        return(
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
                    <Link to={searchText === "" ? "/education" : `/education/${searchText}`}>
                        <img className="search-btn" src={search_icon} onClick={search} />
                    </Link>
                </div>
                <Container>
                    <Row>
                        { searchs && searchs.map(edu => {
                            return (
                                <Col md={4}>
                                    <div className="block">
                                        <Card className={classes.card}>
                                            <Link to={`/education/detail/${edu.id}`}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={edu.photo ? edu.photo.photo : require("assets/placeholder.png")}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                            <div className={classes.text_size}>{edu.host}</div>
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            <div className={classes.body_size}>{edu.title}</div>
                                                            <div>
                                                                {edu.start_at.split("T")[0]} ~ {edu.end_at.split("T")[0]}
                                                            </div>
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Link>
                                            <CardActions>
                                                <div className="icons">
                                                    <a className="detail-link" >
                                                        <CopyToClipboard text={url.concat(`${match.url}/detail/${edu.id}`)
                                                            .replace(`${match.params.text}/`,"")}>
                                                            <div className="share">
                                                                <img className="ss" src={require("assets/share.png")} onClick={copy}></img>
                                                            </div>
                                                        </CopyToClipboard>
                                                    </a>
                                                    <div className="heart">
                                                        { liking ? 
                                                            <Icon className="hh" type="heart" style={{ fontSize: '28px', color: '#e53935' }} onClick={like} />
                                                            :
                                                            <Icon className="hh" type="heart" style={{ fontSize: '28px' }} onClick={like} />
                                                        }
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
        return(
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
                    <Link to={searchText === "" ? "/education" : `/education/${searchText}`}>
                        <img className="search-btn" src={search_icon} onClick={search} />
                    </Link>
                </div>
                <Container>
                    <Row>
                        { educations.results && educations.results.map(edu => {
                            return (
                                <Col md={4}>
                                    <div className="block">
                                        <Card className={classes.card}>
                                            <Link to={`/education/detail/${edu.id}`}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={edu.photo ? edu.photo.photo : require("assets/placeholder.png")}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                            <div className={classes.text_size}>{edu.host}</div>
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            <div className={classes.body_size}>{edu.title}</div>
                                                            <div>
                                                                {edu.start_at.split("T")[0]} ~ {edu.end_at.split("T")[0]}
                                                            </div>
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Link>
                                            <CardActions>
                                                <div className="icons">
                                                    <a className="detail-link" >
                                                        <CopyToClipboard text={url.concat(`${match.url}/detail/${edu.id}`)}>
                                                            <div className="share">
                                                                <img className="ss" src={require("assets/share.png")} onClick={copy}></img>
                                                            </div>
                                                        </CopyToClipboard>
                                                    </a>
                                                    <div className="heart">
                                                        { liking ? 
                                                            <Icon className="hh" type="heart" style={{ fontSize: '28px', color: '#e53935' }} onClick={like} />
                                                            :
                                                            <Icon className="hh" type="heart" style={{ fontSize: '28px' }} onClick={like} />
                                                        }
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

export default EducationList;
