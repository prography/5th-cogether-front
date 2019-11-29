import React, { useEffect } from "react";
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
import { requestEducation } from "store/actions/getInfo";
import { Link } from "react-router-dom";
import "./EducationList.scss";

const EducationList = ({ match }) => {
    const dispatch = useDispatch();
    const educations = useSelector(state => state.educationReducer.educationInfo);

    useEffect(() => {
        dispatch(requestEducation());
    }, []);

    const useStyles = makeStyles({
        card: {
            maxWidth: 300
        },
        media: {
            height: 150
        },
        text: {
            height: 70
        },
        text_size:{
            fontSize:18,
            textDecoration:'none',
            color:'black'
        }
    });

    const classes = useStyles();

    return (
        <div>
            <div className="navPic">
                <div className="slogan">Co.gether와 함께<br/>원하는 목표를 성취해보세요</div>
            </div>
            <Container>
                <Row>
                    {educations.results &&
                        educations.results.map(edu => {
                            return (
                                <Col md={4}>
                                    <div className="block">
                                        <Card className={classes.card}>
                                            <Link to={`${match.url}/${edu.id}`}>
                                                <CardActionArea>
                                                    <CardMedia className={classes.media} />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                                        <div className={classes.text_size}>{edu.title}</div>
                                                        </Typography>
                                                        {/*<Typography variant="body2" color="textSecondary" component="p">
                            </Typography>*/}
                                                    </CardContent>
                                                </CardActionArea>
                                            </Link>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Share
                                                </Button>
                                                <Link to={`${match.url}/${edu.id}`}>
                                                    <Button size="small" color="primary">
                                                        More Info
                                                    </Button>
                                                </Link>
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

export default EducationList;
