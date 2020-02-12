import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { alarmModifyRequestAction } from "../../store/actions/User";
import { favorRequestAction } from "store/actions/User";
import user from "assets/user.png";
import "./Mypage.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Switch, Menu, Dropdown, Button } from "antd";
import Calendars from "component/Calendar/Calendar";
import { Row, Col, Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const Mypage = ({ match }) => {
    const dispatch = useDispatch();
    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    var favors = useSelector(state => state.userReducer.favor);
    const [item, setItem] = useState("전체");

    const meName = useSelector(state => state.userReducer.meName);
    const mePhoto = useSelector(state => state.userReducer.mePhoto);
    const meLogin = useSelector(state => state.userReducer.meLogin);
    const meSubscribe = useSelector(state => state.userReducer.meSubscribe);

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

    const modifyPassword = () => {
        setPassword(!password);
    };
    const switched = () => {
        dispatch(alarmModifyRequestAction(!meSubscribe));
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

    useEffect(() => {
        setToken(localStorage.getItem("accessToken"));
    }, [localStorage.getItem("accessToken")]);

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
                                        {/* <div className="value">{meName && meName.toString().replaceAll('"', "")}</div> */}
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
                                            <Switch defaultChecked={meSubscribe} onChange={switched} />
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
                                <Calendars favors={favors}></Calendars>
                            </div>
                        </div>
                        <div className="section">
                            <div className="section-title">즐겨찾기한 목록</div>
                            <div className="section-head">{/* <div className="detail">즐겨찾기한 일정들을 한눈에 모아보세요.</div> */}</div>
                            <div className="section-content">
                                {/* <Dropdown overlay={menu} placement="bottomCenter">
                                    <Button>{item}</Button>
                                </Dropdown> */}
                                <Container>
                                    <Row>
                                        {favors &&
                                            favors.map(favor => {
                                                return (
                                                    <Col md={4}>
                                                        <div className="block">
                                                            <Card className={classes.card}>
                                                                <Link to={`/${favor.category.name}/detail/${favor.id}`}>
                                                                    <CardActionArea>
                                                                        <CardMedia
                                                                            className={classes.media}
                                                                            image={
                                                                                favor.photo ? favor.photo.photo : require("assets/placeholder.png")
                                                                            }
                                                                        />
                                                                        <CardContent>
                                                                            <Typography
                                                                                gutterBottom
                                                                                variant="h5"
                                                                                component="h2"
                                                                                className={classes.text}
                                                                            >
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
                                                                            {like(favor.id) !== -1 ? (
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
