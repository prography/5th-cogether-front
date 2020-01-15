import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user from "assets/user.png";
import "./Mypage.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Switch, Menu, Dropdown, Button } from "antd";
import Calendars from "component/Calendar/Calendar";
import { favorRequest } from "store/actions/User";
import { Row, Col, Container } from "react-bootstrap";
import { Icon } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const Mypage = ({ match }) => {
    const dispatch = useDispatch();

    const [token, setToken] = useState(localStorage.getItem("accessToken"));

    const me = useSelector(state => state.userReducer.meInfo);
    var favors = useSelector(state => state.userReducer.favor);

    const [item, setItem] = useState("전체");
    const [liking, setLiking] = useState(false); //즐겨찾기 여부
    const meName = useSelector(state => state.userReducer.meName);
    const mePhoto = useSelector(state => state.userReducer.mePhoto);
    const meLogin = useSelector(state => state.userReducer.meLogin);

    const [password, setPassword] = useState(false);

    const menu = (
        <Menu>
            <Menu.Item onClick={() => setItem("전체")}>전체</Menu.Item>
            <Menu.Item onClick={() => setItem("동아리")}>동아리</Menu.Item>
            <Menu.Item onClick={() => setItem("컨퍼런스")}>컨퍼런스</Menu.Item>
            <Menu.Item onClick={() => setItem("교육")}>교육</Menu.Item>
        </Menu>
    );

    const url = "https://cogether.kr";
    const copy = () => {
        swal("클립보드 복사가 완료되었습니다");
    };

    const addLike = id => {
        const data = { type: "post", id: id };
        dispatch(favorRequest(data));
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

    const modifyPassword = () => {
        setPassword(!password);
    };

    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
    }, [localStorage.getItem("accessToken")]);

    useEffect(() => {
        dispatch(favorRequest({ type: "get" }));
    }, []);

    if (meName) {
        return (
            <>
                {password && <Redirect to="/password" />}
                <div className="mypage-wrap">
                    <div className="head">
                        <div className="text">마이페이지</div>
                    </div>
                    <div className="content-box">
                        <div className="section">
                            <div className="section-title"> 내 정보 관리</div>
                            <div className="section-head">
                                <div className="detail">내 개인 정보를 수정해주세요.</div>
                            </div>
                            <div className="section-content">
                                <div className="photo">
                                    {mePhoto ? (
                                        <img style={{ width: 100, height: 100 }} src={mePhoto} />
                                    ) : (
                                        <img style={{ width: 100, height: 100 }} src={user} />
                                    )}
                                    <button className="photo-button">사진변경</button>
                                </div>
                                <div className="info-box">
                                    <div className="info">
                                        <div className="key">이메일</div>
                                        <div className="value">{meName}</div>
                                    </div>
                                    {meLogin === "email" && (
                                        <div className="info">
                                            <div className="key">비밀번호</div>
                                            <button className="modify-password" onClick={modifyPassword}>
                                                비밀번호 변경하기
                                            </button>
                                        </div>
                                    )}
                                    <div className="info">
                                        <div className="key">이메일 수신 알림</div>
                                        <div className="value-1">
                                            <Switch defaultChecked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="section-title"> 캘린더</div>
                            <div className="section-head">
                                <div className="detail">즐겨찾기한 일정들을 한눈에 모아보세요.</div>
                            </div>
                            <div className="section-content">
                                <Calendars></Calendars>
                            </div>
                        </div>
                        <div className="section-content">
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Button>{item}</Button>
                            </Dropdown>
                            <Container>
                                <Row>
                                    {favors &&
                                        favors.map(favor => {
                                            return (
                                                <Col md={4}>
                                                    <div className="block">
                                                        <Card className={classes.card}>
                                                            <Link to={`/club/detail/${favor.id}`}>
                                                                <CardActionArea>
                                                                    <CardMedia
                                                                        className={classes.media}
                                                                        image={favor.photo ? favor.photo.photo : require("assets/placeholder.png")}
                                                                    />
                                                                    <CardContent>
                                                                        <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                                            <div className={classes.text_size}>{favor.host}</div>
                                                                        </Typography>
                                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                                            <div className={classes.body_size}>{favor.title}</div>
                                                                            <div>
                                                                                {favor.start_at.split("T")[0]} ~ {favor.end_at.split("T")[0]}
                                                                            </div>
                                                                        </Typography>
                                                                    </CardContent>
                                                                </CardActionArea>
                                                            </Link>
                                                            <CardActions>
                                                                <div className="icons">
                                                                    <a className="detail-link">
                                                                        <CopyToClipboard text={url.concat(`${match.url}/detail/${favor.id}`)}>
                                                                            <div className="share">
                                                                                <img
                                                                                    className="ss"
                                                                                    src={require("assets/share.png")}
                                                                                    onClick={copy}
                                                                                ></img>
                                                                            </div>
                                                                        </CopyToClipboard>
                                                                    </a>
                                                                    <div className="heart" onClick={() => addLike(favor.id)}>
                                                                        {liking ? (
                                                                            <Icon
                                                                                className="hh"
                                                                                type="heart"
                                                                                style={{ fontSize: "28px", color: "#e53935" }}
                                                                                onClick={like}
                                                                            />
                                                                        ) : (
                                                                            <Icon
                                                                                className="hh"
                                                                                type="heart"
                                                                                style={{ fontSize: "28px" }}
                                                                                onClick={like}
                                                                            />
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
                    </div>
                </div>
            </>
        );
    } else {
        return <Redirect to="/login" />;
    }
};

export default Mypage;
